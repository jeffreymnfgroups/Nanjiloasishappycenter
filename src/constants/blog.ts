import type { ImageAsset } from './images'
import { galleryImages } from './images'

export interface BlogAuthor {
  name: string
  avatar?: string
  role?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  image?: ImageAsset
  body?: string
  author?: BlogAuthor
}

/** Blog posts use images from the gallery (galleryImages). */
export const blogPosts: BlogPost[] = [
  {
    slug: 'ableify-award-ceremony',
    title: 'Breaking Barriers – ABLEify Award at Nanjil Oasis',
    excerpt: 'Our centre was honoured at the ABLEify award ceremony. A proud moment for our children, families and the whole team.',
    date: '2024-02-15',
    image: galleryImages[0],
    author: { name: 'Nanjil Oasis Team', role: 'Centre' },
    body: `
      <p>We are grateful to have been recognised at the ABLEify award ceremony held earlier this year. This award reflects the dedication of our staff, the progress of our children, and the support of our community.</p>
      <h2>What the award means to us</h2>
      <p>ABLEify celebrates organisations that break barriers and create inclusive spaces. For Nanjil Oasis, being honoured in this way affirms our daily work: every child deserves a place where their abilities are seen and nurtured.</p>
      <p>Our therapists, caregivers, and volunteers have worked tirelessly to adapt programmes and create a welcoming environment. This award is as much theirs as it is the children’s.</p>
      <h2>Thank you</h2>
      <p>Thank you to everyone who makes Nanjil Oasis a place where abilities are celebrated — families, donors, partners, and friends. We look forward to many more milestones together.</p>
    `,
  },
  {
    slug: 'christmas-celebration-2024',
    title: 'Christmas Day Celebration – December 2024',
    excerpt: 'Our annual Christmas celebration brought together children, families and volunteers for a day of joy, music and togetherness.',
    date: '2024-12-20',
    image: galleryImages[1],
    author: { name: 'Nanjil Oasis Team', role: 'Centre' },
    body: `
      <p>The Christmas celebration at Nanjil Oasis was a day to remember. From carols and performances to shared meals and gifts, our children and their families enjoyed a festive gathering.</p>
      <h2>Highlights of the day</h2>
      <p>We kicked off with carol singing and small performances by the children. Many had been practising for weeks, and it showed — the room was full of smiles and applause.</p>
      <p>Lunch was a shared affair: families, staff, and volunteers sat together. After lunch, we distributed small gifts and sweets. The excitement on the children’s faces was the best gift we could ask for.</p>
      <h2>Gratitude</h2>
      <p>We thank all volunteers and donors who made this possible. Your generosity and time help us create moments that our families will cherish for years to come.</p>
    `,
  },
  {
    slug: 'new-therapy-programmes',
    title: 'New Therapy Programmes at the Centre',
    excerpt: 'We have expanded our therapy and activity offerings to include additional sessions in music, art and movement.',
    date: '2024-11-01',
    image: galleryImages[2],
    author: { name: 'Nanjil Oasis Team', role: 'Centre' },
    body: `
      <p>This year we introduced new therapy programmes to better support each child’s development. Our goal is to offer a wider range of activities so that every child can find something that suits their interests and needs.</p>
      <h2>What’s new</h2>
      <p>We have expanded sessions in <strong>music</strong> (rhythm, singing, simple instruments), <strong>art</strong> (painting, crafts, sensory play), and <strong>movement</strong> (gentle exercise, coordination games, and outdoor play).</p>
      <p>Each programme is designed to be adaptable. Our team works with families to set small, achievable goals and to adjust activities as the child grows.</p>
      <h2>Looking ahead</h2>
      <p>Our team continues to train and adapt so that every child can access the activities that work best for them. If you would like to know more or support these programmes, get in touch.</p>
    `,
  },
  {
    slug: 'volunteer-thank-you',
    title: 'Thank You to Our Volunteers',
    excerpt: 'A heartfelt thank you to everyone who gave their time and skills at Nanjil Oasis this year.',
    date: '2024-10-10',
    image: galleryImages[3],
    author: { name: 'Nanjil Oasis Team', role: 'Centre' },
    body: `
      <p>Our volunteers are the heartbeat of Nanjil Oasis. Whether helping in therapy sessions, events, or day-to-day activities, your presence makes a real difference.</p>
      <h2>How volunteers help</h2>
      <p>Volunteers support us in many ways: assisting during therapy and art sessions, helping with events and outings, and simply spending time with the children. That one-on-one attention and extra pair of hands mean the world to our staff and families.</p>
      <p>Some of you have been with us for years; others joined recently. Every hour you give counts.</p>
      <h2>Join us</h2>
      <p>We look forward to welcoming more helping hands in the year ahead. If you have a few hours to spare and would like to be part of our community, we would love to hear from you.</p>
    `,
  },
  {
    slug: 'sharbat-stall-life-at-the-centre',
    title: 'Sharbat Stall – Life at the Centre',
    excerpt: 'Our children took part in a sharbat stall activity, building practical and social skills in a fun, real-world setting.',
    date: '2024-09-05',
    image: galleryImages[17],
    author: { name: 'Nanjil Oasis Team', role: 'Centre' },
    body: `
      <p>The sharbat stall project gave our children a chance to practise counting, communication, and teamwork in a fun, real-world setting. It was one of the most talked-about activities of the term.</p>
      <h2>What we did</h2>
      <p>Children helped set up a small stall, prepare drinks, and serve them to staff and visitors. They took turns handling “orders,” counting change, and greeting people. The focus was on following steps, asking for help when needed, and working together.</p>
      <p>We kept the setup simple and safe, so everyone could participate at their own level. Some children focused on pouring and serving; others enjoyed greeting and handing out cups.</p>
      <h2>Why it matters</h2>
      <p>Activities like these help build confidence and prepare our children for everyday life. They also remind us how much they can achieve when we create the right opportunities. We plan to run similar life-skills projects again soon.</p>
    `,
  },
]
