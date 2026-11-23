type MenuItem = {
  name: string;
  image: string;
  href: string;
};

type SubjectSectionProps = {
  name: string;
  sectionClass: string;
  titleClass: string;
  characterLeft: string;
  characterRight: string;
  menuItems: MenuItem[];
};

function SubjectSection({
  name,
  sectionClass,
  titleClass,
  characterLeft,
  characterRight,
  menuItems,
}: SubjectSectionProps) {
  return (
    <section className={`${sectionClass} subject-section`}>

      {/* 科目の見出し */}
      <h2 className={titleClass}>
        <span>{name}</span>
      </h2>

      {/* 左キャラクター・中央メニュー・右キャラクター */}
      <div className="subject-layout">

        {/* 左側のキャラクター */}
        <div className="subject-character-left">
          <img
            src={characterLeft}
            alt={`${name}の左側のキャラクター`}
          />
        </div>

        {/* 中央の単元メニュー */}
        <div className="subject-menu">

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="subject-unit"
            >
              <span className="subject-unit-name">
                {item.name}
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="subject-unit-image"
              />
            </a>
          ))}

        </div>

        {/* 右側のキャラクター */}
        <div className="subject-character-right">
          <img
            src={characterRight}
            alt={`${name}の右側のキャラクター`}
          />
        </div>

      </div>
    </section>
  );
}

export default SubjectSection;