
import "../styles/top.css";
import SubjectSection from "../components/SubjectSection";

function Top() {
  return (
    <main className="top-page">

      {/* サイトの説明 */}
      <section className="about-section">
        <h1>Study Quest</h1>
        <h2>サイトの説明</h2>
        <p>勉強のきっかけづくりのページ</p>
      </section>

      {/* 数学 */}
      <SubjectSection
        name="数学"
        sectionClass="math-section"
        titleClass="section-math-title"
        characterLeft="/images/character/math-m.png"
        characterRight="/images/character/math-m.png"
        menuItems={[
          {
            name: "sin cos tan",
            image: "/images/icon/math/sct-run-back.png",
            href: "MathematicsList",
          },
          {
            name: "図形",
            image: "/images/icon/math/sct-run-back.png",
            href: "/math/geometry",
          },
          {
            name: "関数",
            image: "/images/icon/math/sct-run-back.png",
            href: "/math/function",
          },
          {
            name: "確率・統計",
            image: "/images/icon/math/sct-run-back.png",
            href: "/math/probability",
          },
        ]}
      />

      {/* 物理 */}
      <SubjectSection
        name="物理"
        sectionClass="physics-section"
        titleClass="section-physics-title"
        characterLeft="/images/character/physics-m.png"
        characterRight="/images/character/physics-f.png"
        menuItems={[
          {
            name: "力学",
            image: "/images/icon/math/sct-run-back.png",
            href: "/physics/mechanics",
          },
          {
            name: "波",
            image: "/images/icon/math/sct-run-back.png",
            href: "/physics/wave",
          },
          {
            name: "電気",
            image: "/images/icon/math/sct-run-back.png",
            href: "/physics/electricity",
          },
          {
            name: "熱",
            image: "/images/icon/math/sct-run-back.png",
            href: "/physics/heat",
          },
        ]}
      />

      {/* 化学 */}
      <SubjectSection
        name="化学"
        sectionClass="chemistry-section"
        titleClass="section-chemistry-title"
        characterLeft="/images/character/chemistry-m.png"
        characterRight="/images/character/chemistry-f.png"
        menuItems={[
          {
            name: "原子・分子",
            image: "/images/icon/math/sct-run-back.png",
            href: "/chemistry/atom",
          },
          {
            name: "化学反応",
            image: "/images/icon/math/sct-run-back.png",
            href: "/chemistry/reaction",
          },
          {
            name: "酸・塩基",
            image: "/images/icon/math/sct-run-back.png",
            href: "/chemistry/acid-base",
          },
          {
            name: "有機化学",
            image: "/images/icon/math/sct-run-back.png",
            href: "/chemistry/organic",
          },
        ]}
      />

    </main>
  );
}

export default Top;
