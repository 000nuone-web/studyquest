
import type { Category } from "../../data/MathData/mathCategories";

type Props = {
  category?: Category;
};

function MathCategorySection({ category }: Props) {

  // categoryが存在しない場合は表示しない
  if (!category) {
    console.error("CategorySection: categoryが渡されていません");
    return null;
  }

  return (
    <section className="math-grid-item">
      <h2>{category.title}</h2>

      <div className="math-icon-row">
        {category.items.map((item) => (
          <a
            className="math-icon-container"
            href={item.link}
            key={item.link}
          >
            <img src={item.image} alt={item.alt} />

            {/* 画像の下にタイトルを表示 */}
            <p className="math-icon-title">{item.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default MathCategorySection;
