import "../../styles/MathStyles/math.css";

import CategorySection from "../../components/MathComponents/MathCategorySection";
import categories from "../../data/MathData/mathCategories";

function MathematicsList() {
  return (
    <main className="math-page">
      <div className="math-grid-container">

        {/* 左上：数学 */}
        <CategorySection category={categories[0]} />

        {/* 右上：物理 */}
        <CategorySection category={categories[1]} />

        {/* 左下：空白 */}
        <div className="math-grid-item" />

        {/* 右下：便利ツール */}
        <CategorySection category={categories[2]} />

      </div>
    </main>
  );
}

export default MathematicsList;