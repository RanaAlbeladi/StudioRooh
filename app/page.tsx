import Header from '@/components/Header';
import ActionCards from '@/components/ActionCards';
import Themes from '@/components/Themes';
import Packages from '@/components/Packages';
import Footer from '@/components/Footer';

export default function Home(){
  return <main id="home"><Header/><section className="hero"><div className="hero-copy"><span className="scribble">Little Moments, Big Memories ♡</span><h1>استديو روح</h1><h2>نصنع لكم ذكريات تبقى للأبد</h2><span className="mini-pill">كل صورة .. حكاية ♡</span></div><div className="hero-art"><div className="photo-placeholder"><span>صورة رئيسية<br/>من تصوير الاستديو</span></div><span className="doodle d1">☁</span><span className="doodle d2">☆</span><span className="doodle d3">♡</span></div></section><ActionCards/><Themes/><Packages/><Footer/></main>
}
