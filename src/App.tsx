
import { Routes, Route, Navigate } from "react-router-dom";

// ページの情報取得
import Top from "./pages/Top";
import MathematicsList from "./pages/MathPage/MathematicsList";

function App() {

  // ページ一覧
  const routes = [

    // トップ画面（初期表示）
    {
      path: "/Top",
      element: <Top />
    },

    // 数学・物理・便利ツール一覧
    {
      path: "/MathematicsList",
      element: <MathematicsList />
    },

  ];

  // ページの移動
  return (
    <Routes>
      {/* 初期ページの設定 */}
      <Route path="/" element={<Navigate to="/Top" />} />

      {/* まとめたルートをmapで展開 */}
      {routes.map((r) => (
        <Route
          key={r.path}
          path={r.path}
          element={r.element}
        />
      ))}
    </Routes>
  );
}

export default App;
