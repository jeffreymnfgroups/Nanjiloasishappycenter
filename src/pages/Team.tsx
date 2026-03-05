import { PageMeta } from '../components/PageMeta'
import { PageHero } from '../components/PageHero'
import { pageHeroImages } from '../constants/images'
import { Icons } from '../components/TeamIcons'

const trustees = [
  {
    id: 1,
    role: 'Chairperson',
    description:
      'Provides overall leadership and strategic direction for Nanjil Oasis Parent Welfare Trust, ensuring the organisation stays true to its founding mission of inclusive care.',
    icon: Icons.chairperson,
  },
  {
    id: 2,
    role: 'Secretary',
    description:
      'Oversees governance, record-keeping and day-to-day administration of the trust, coordinating between the board and the operational team.',
    icon: Icons.secretary,
  },
  {
    id: 3,
    role: 'Treasurer',
    description:
      'Manages the financial health of the trust, ensuring transparent use of funds and accountability to donors, families and stakeholders.',
    icon: Icons.treasurer,
  },
  {
    id: 4,
    role: 'Trustee – Parent Representative',
    description:
      'Brings the voice of families and caregivers directly into board decisions, championing parent-centred policies and community engagement.',
    icon: Icons.parentRep,
  },
]

const professionals = [
  {
    id: 1,
    role: 'Special Educator',
    description:
      "Designs and delivers individualised education plans (IEPs) tailored to each child's learning profile, using evidence-based techniques to maximise developmental outcomes.",
    icon: Icons.specialEd,
  },
  {
    id: 2,
    role: 'Speech & Language Therapist',
    description:
      'Supports children in developing communication, language comprehension and social interaction skills through structured, play-based therapy sessions.',
    icon: Icons.speech,
  },
  {
    id: 3,
    role: 'Occupational Therapist',
    description:
      'Helps children build sensory processing, fine motor and self-care abilities, enabling greater independence in daily life and classroom participation.',
    icon: Icons.occupational,
  },
  {
    id: 4,
    role: 'Physiotherapist',
    description:
      'Focuses on gross motor development, posture and movement, using targeted exercises to improve mobility, strength and physical confidence.',
    icon: Icons.physio,
  },
  {
    id: 5,
    role: 'Behaviour Support Specialist',
    description:
      'Applies positive behaviour support strategies to help children manage emotions and behaviour, creating calm and structured environments for learning.',
    icon: Icons.behaviour,
  },
  {
    id: 6,
    role: 'Parent Counsellor',
    description:
      "Provides guidance, emotional support and training to families, equipping caregivers with practical strategies to support their child's progress at home.",
    icon: Icons.counsellor,
  },
]

const stats = [
  { value: '15+', label: 'Years of service' },
  { value: '6',   label: 'Therapy disciplines' },
  { value: '100+',label: 'Children supported' },
  { value: '4',   label: 'Governing trustees' },
]

export function Team() {
  return (
    <>
      <PageMeta
        title="Our Team"
        description="Our Team – Trustees and Professional team at Nanjil Oasis Happy Centre, Multicare Centre for Kids with Special Needs."
      />
      <PageHero
        title="Our Team"
        subtitle="Trustees and professional staff dedicated to every child"
        image={pageHeroImages.team}
      />

      {/* Stats Strip */}
      <div className="team-stats-strip">
        <div className="container">
          <ul className="team-stats">
            {stats.map((s) => (
              <li key={s.label} className="team-stat">
                <span className="team-stat__value">{s.value}</span>
                <span className="team-stat__label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Trustees */}
      <section className="section" id="trustees">
        <div className="container">
          <p className="section__label">GOVERNANCE</p>
          <h2 className="section__title section__title--large">Trustees</h2>
          <p className="section__intro">
            Our board of trustees guides the vision, governance and long-term sustainability of
            Nanjil Oasis Parent Welfare Trust — ensuring every decision puts children and families first.
          </p>
          <div className="team-grid">
            {trustees.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card__avatar">
                  <span className="team-card__svg">{member.icon}</span>
                </div>
                <div className="team-card__body">
                  <span className="team-card__badge team-card__badge--trustee">Trustee</span>
                  <h3 className="team-card__role">{member.role}</h3>
                  <p className="team-card__desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Callout */}
      <div className="team-callout">
        <div className="container">
          <div className="team-callout__inner">
            <span className="team-callout__svg">{Icons.leaf}</span>
            <p className="team-callout__text">
              Every member of our team — from the board room to the therapy room — shares one
              belief: <strong>every child deserves to thrive</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Professional Team */}
      <section className="section section--alt" id="professional">
        <div className="container">
          <p className="section__label">PROFESSIONAL TEAM</p>
          <h2 className="section__title section__title--large">Multidisciplinary experts</h2>
          <p className="section__intro">
            Our skilled professionals work collaboratively across disciplines to deliver holistic,
            child-centred care — combining therapy, education and family support under one roof.
          </p>
          <div className="team-grid team-grid--wide">
            {professionals.map((member) => (
              <div key={member.id} className="team-card team-card--horizontal">
                <div className="team-card__avatar team-card__avatar--sm">
                  <span className="team-card__svg">{member.icon}</span>
                </div>
                <div className="team-card__body">
                  <span className="team-card__badge team-card__badge--pro">Professional</span>
                  <h3 className="team-card__role">{member.role}</h3>
                  <p className="team-card__desc">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section team-join">
        <div className="container">
          <div className="team-join__inner">
            <div>
              <h2 className="team-join__title">Interested in joining our team?</h2>
              <p className="team-join__text">
                We welcome passionate professionals who believe in inclusive education and
                compassionate care. Reach out to us to learn about opportunities at Nanjil Oasis.
              </p>
            </div>
            <a href="/contact" className="btn btn--primary team-join__btn">
              <span className="team-join__btn-icon">{Icons.mail}</span>
              Get in touch
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
