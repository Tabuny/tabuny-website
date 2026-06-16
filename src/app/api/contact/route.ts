import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, subject, message, locale, pickupCity, pickupDate } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const subjectLabels: Record<string, Record<string, string>> = {
      de: { general: 'Allgemeine Frage', pickup: 'Abholung', partnership: 'Partnerschaft', feedback: 'Feedback', other: 'Sonstiges' },
      en: { general: 'General Question', pickup: 'Pickup', partnership: 'Partnership', feedback: 'Feedback', other: 'Other' },
      fr: { general: 'Question Générale', pickup: 'Retrait', partnership: 'Partenariat', feedback: 'Retour', other: 'Autre' },
      it: { general: 'Domanda Generale', pickup: 'Ritiro', partnership: 'Partnership', feedback: 'Feedback', other: 'Altro' },
    };

    // Localized row labels for the pickup-specific fields
    const fieldLabels: Record<string, { city: string; date: string }> = {
      de: { city: 'Abholort', date: 'Wunschdatum' },
      en: { city: 'Pickup City', date: 'Preferred Date' },
      fr: { city: 'Lieu de Retrait', date: 'Date Souhaitée' },
      it: { city: 'Luogo di Ritiro', date: 'Data Preferita' },
    };

    const subjectLabel = subjectLabels[locale]?.[subject] ?? subject;
    const fl = fieldLabels[locale] ?? fieldLabels.en;

    const rowStyle = 'padding: 12px 0; border-bottom: 1px solid #f0e8dc;';
    const labelCell = 'color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;';
    const valueCell = 'color: #1A0A04; font-size: 15px;';

    // Build the optional pickup rows only when those fields are present
    const pickupRows = `
      ${pickupCity ? `
      <tr>
        <td style="${rowStyle} ${labelCell}">${fl.city}</td>
        <td style="${rowStyle} ${valueCell}">${pickupCity}</td>
      </tr>` : ''}
      ${pickupDate ? `
      <tr>
        <td style="${rowStyle} ${labelCell}">${fl.date}</td>
        <td style="${rowStyle} ${valueCell}">${pickupDate}</td>
      </tr>` : ''}
    `;

    await resend.emails.send({
      from: 'Tabuny Website <noreply@tabuny.ch>',
      to: 'info@tabuny.ch',
      replyTo: email,
      subject: `[Tabuny] ${subjectLabel} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #f5f0e8; padding: 40px;">
          
          <div style="background: #2B1D16; padding: 32px; margin-bottom: 32px; text-align: center;">
            <h1 style="color: #C8A46B; font-size: 28px; margin: 0; letter-spacing: 0.05em;">TABUNY</h1>
            <p style="color: #9A8672; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 8px 0 0;">Neue Kontaktanfrage</p>
          </div>

          <div style="background: white; padding: 32px; border: 1px solid rgba(200,164,107,0.3);">
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Firma</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">E-Mail</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px;"><a href="mailto:${email}" style="color: #A8843B;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Telefon</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px;">${phone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Betreff</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px;">${subjectLabel}</td>
              </tr>
              ${pickupRows}
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase;">Sprache</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f0e8dc; color: #1A0A04; font-size: 15px;">${locale?.toUpperCase()}</td>
              </tr>
            </table>

            <div style="margin-top: 28px;">
              <p style="color: #9A8672; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Nachricht</p>
              <div style="background: #f5f0e8; padding: 20px; border-left: 3px solid #C8A46B; color: #1A0A04; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="margin-top: 28px; text-align: center;">
              <a href="mailto:${email}" style="background: linear-gradient(135deg, #C8A46B, #A8843B); color: #2B1D16; font-weight: 700; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; padding: 14px 32px; text-decoration: none; display: inline-block;">
                Antworten →
              </a>
            </div>
          </div>

          <p style="text-align: center; color: #9A8672; font-size: 11px; margin-top: 24px; letter-spacing: 0.1em;">
            TABUNY SCHWEIZ · Toggenburgstrasse 23, 9608 Ganterschwil
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}