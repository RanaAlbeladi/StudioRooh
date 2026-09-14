export default function SectionTitle({eyebrow,title,subtitle}:{eyebrow:string;title:string;subtitle:string}){
  return <div className="section-title"><span>{eyebrow}</span><h2>{title}</h2><p>{subtitle}</p></div>
}
