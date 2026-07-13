import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { MapPin, BookOpen, Award, Globe } from "lucide-react";
import profPhoto from "@/assets/prof-awe.jpg";

const milestones = [
  { year: "Nigeria", desc: "B.Sc. & M.Sc. (Statistics, University of Ibadan/Ilorin); PhD Statistics, University of Ibadan (2016). Lecturer at Obafemi Awolowo University and Anchor University Lagos." },
  { year: "USA", desc: "Visiting J1 Scholar at Virginia Tech (2013–2014); Certificate of Excellence in Interdisciplinary Statistics and Data Science." },
  { year: "Brazil", desc: "CAPES Postdoc at UFBA (2020–2021); FAPESP International Research Fellow at UNICAMP (2021–2023); MBA in Data Science & Analytics, University of São Paulo (2023–2025); Research Professor & ML Team Leader at UFBA (2023–present)." },
  { year: "Germany", desc: "Alexander von Humboldt Experienced Fellow and AvH Visiting Professor of Statistical and Data Science Literacy at Ludwigsburg University of Education (2025–present)." },
  { year: "Global", desc: "Vice President of Global Statistical Engagements, LISA 2020 Global Network (USA); Council Member of the ISI; VP for Membership, ISBIS; Distinguished Professor of Data Science, Miva University." },
];

const About = () => (
  <div>
    <SEO
      title="About Prof. Olushina O. Awe | Humboldt Professor, Statistician"
      description="Biography of Prof. Olushina Olawale Awe - Alexander von Humboldt Visiting Professor at Ludwigsburg University of Education, with career stops in Nigeria, USA, Brazil and Germany."
      path="/about"
    />
    {/* Header */}
    <section className="bg-primary section-padding">
      <div className="section-container grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/40 to-transparent rounded-full blur-2xl" />
          <img
            src={profPhoto}
            alt="Professor Olushina Olawale Awe"
            className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-accent/60 shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Prof. Olushina Olawale Awe</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Professor of Statistics & Data Science | Global Thought Leader in AI, Civic Data Science, and Statistical Education
          </p>
        </div>
      </div>
    </section>

    {/* Bio */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Professional Biography" centered={false} />
        <div className="prose prose-lg text-muted-foreground space-y-5">
          <p>
            Professor Olushina Olawale Awe is an internationally recognized statistician, data scientist, and educator whose career spans more than 15 years of university teaching, research supervision, and institutional leadership across four continents. His work sits at the intersection of statistical theory, machine learning, and public-interest data science, with a consistent emphasis on methods that are rigorous, interpretable, and socially useful.
          </p>
          <p>
            He began his academic training in Nigeria, earning a Bachelor of Science and a Master of Science in Statistics from the University of Ibadan and the University of Ilorin respectively, before completing his PhD in Statistics at the University of Ibadan in 2016. During his doctoral studies he was a Visiting J1 Scholar in the Department of Statistics at Virginia Tech in the United States, where he received a Certificate of Excellence in Interdisciplinary Statistics and Data Science. He subsequently held faculty positions at Obafemi Awolowo University and Anchor University Lagos, supervising graduate students and building early research programs in time-series analysis, Bayesian computation, and statistical learning.
          </p>
          <p>
            In 2020, Professor Awe moved to Brazil as a CAPES Postdoctoral Researcher at the Federal University of Bahia (UFBA). He later held a FAPESP International Research Fellowship at the University of Campinas (UNICAMP) from 2021 to 2023, and completed an MBA in Data Science and Analytics at the University of Sao Paulo. He currently serves as a Research Professor and Machine Learning Team Leader at UFBA's Statistics Laboratory for Learning and Data Science (SaLLy), while maintaining active collaborations with researchers across Latin America, Europe, Africa, and North America.
          </p>
          <p>
            Since 2025, Professor Awe has been an Alexander von Humboldt Experienced Research Fellow and Visiting Professor of Statistical and Data Science Literacy at Ludwigsburg University of Education in Germany. In this role he develops curricula and research programs that strengthen quantitative literacy among educators, policymakers, and early-career researchers. He is also a Distinguished Professor of Data Science at Miva University in Abuja, Nigeria, where he supports doctoral training and institutional capacity building.
          </p>
          <p>
            Professor Awe has authored or co-authored <strong>more than 100 peer-reviewed publications</strong> in statistics, machine learning, and interdisciplinary data science, and has edited major scholarly volumes published by Springer and Taylor & Francis. His research addresses functional and time-series data analysis, Bayesian and computational statistics, deep learning, explainable AI, health data science, and civic data science, with applications in public health, climate, agriculture, economics, education, and democratic governance.
          </p>
          <p>
            Beyond research, he holds several prominent leadership roles. He is <strong>Vice President of Global Statistical Engagements for the LISA 2020 Global Network</strong>, headquartered at the University of Colorado Boulder, where he helps coordinate a worldwide community of statisticians working to accelerate data-driven solutions for society. He is a <strong>Council Member of the International Statistical Institute (ISI, 2025–2029)</strong>, <strong>Vice President for Membership of the International Society for Business and Industrial Statistics (ISBIS, 2025–2027)</strong>, and was elected <strong>Fellow of the Royal Statistical Society in 2025</strong>. He also holds the Accredited Professional Statistician (PStat) credential from the American Statistical Association and Chartered Statistician (CStat) status.
          </p>
          <p>
            Under his leadership, the LISA 2020 Global Network has trained 225 statisticians, supported 9,429 researchers across 2,719 projects, and delivered 196 short courses to 3,748 participants in more than 30 countries. These numbers reflect a broader conviction: that statistical and data science capacity should be distributed globally, and that well-trained quantitative scientists are essential to addressing challenges in health, climate, governance, and economic development.
          </p>
          <p>
            Professor Awe's teaching philosophy treats data literacy as a tool for empowerment and democracy. He has designed and delivered courses, MicroMasters programs, workshops, and bootcamps in data science, machine learning, statistical modeling, and civic data science through institutions and platforms including the ADA Global Academy. His instruction emphasizes reproducible research, ethical AI, interpretable models, and real-world problem solving.
          </p>
          <p>
            Looking ahead, his research agenda continues to focus on rigorous statistical foundations for machine learning, interpretable and responsible AI, and scalable data-driven methods. He remains committed to graduate training, interdisciplinary collaboration, and high-impact research that serves democratic governance, public health, and equitable development.
          </p>
        </div>
      </div>
    </section>

    {/* Career Journey */}
    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Global Career Journey" subtitle="From Nigeria to the world stage." />
        <div className="max-w-2xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{m.year}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Leadership & Global Influence" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Award, title: "AvH Visiting Professor", desc: "Alexander von Humboldt Experienced Fellow at Ludwigsburg University of Education, Germany (2025–present)." },
            { icon: Globe, title: "VP, LISA 2020 Global Network", desc: "Leading global statistical engagements, capacity building, and interdisciplinary collaboration." },
            { icon: BookOpen, title: "ISI Council & FRSS", desc: "Council Member of the International Statistical Institute (2025–2029) and Fellow of the Royal Statistical Society." },
          ].map((item) => (
            <div key={item.title} className="card-elevated p-6 text-center">
              <item.icon className="mx-auto text-accent mb-3" size={32} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
