# A_L_I_S_E scan — 公開記事索引

A_L_I_S_Eのnote公開記事を、記事番号・タイトル・公開日・テーマから探すための独立した索引です。本文の正本は [A_L_I_S_Eのnote](https://note.com/alise_s99lab) にあります。

**公開中の索引ページ：** [https://s99lab.github.io/alise-article-index/](https://s99lab.github.io/alise-article-index/)

**GitHub内のS. Meta記事を探す・編集する：** [S. Meta研究ポータルの別リポジトリ](https://github.com/s99lab/s99lab.github.io) ／ [S. Meta note記事索引のHTML原本](https://github.com/s99lab/s99lab.github.io/blob/main/smeta-note-index.html)

※ このリポジトリにはA_L_I_S_Eの記事索引を保管しています。S. Metaの12記事は上記の別リポジトリです。

**検索エンジン用サイトマップ：** [sitemap.xml](https://s99lab.github.io/alise-article-index/sitemap.xml)

## A_L_I_S_Eとは、なぜ公開するのか

**A_L_I_S_Eは、人間とAIの継続的な協働の境界面から発展してきたUniversal OS（A_L_I_S_E）を通じて、世の中の構造を読み解く公開メディアです。** 政治、経済、社会、技術、文化、人間行動などを題材に、ニュースや目の前の現象の背後にある構造を考察します。

記事の公開には、読者に新しい見方を届ける目的と、Universal OSを現実世界に当てながら分析の可能性と限界を確かめていく継続的な実践・実験としての目的があります。記事の公開自体は、Universal OSの科学的妥当性を証明しません。

- [A_L_I_S_Eとは｜公開目的・読み方・研究との違い](about.html)（[公開ページ](https://s99lab.github.io/alise-article-index/about.html)）
- [公開記事索引](index.html)
- [note原文](https://note.com/alise_s99lab)

**S. Metaとの区別：** [S. Meta Research Archives](https://s99lab.github.io/) は研究成果・概念を検証可能な形で公開する研究アーカイブです。[S. Metaのnote](https://note.com/s99lab) はその研究を分かりやすく伝え、背景の問いや思いを綴る場所です。A_L_I_S_Eは論文の単純な言い換えではなく、Universal OSを通した独立の構造分析メディアです。

未公開のプロンプト、採点ロジック、運用手順、内部の実装は公開しません。人間が最終的な編集・公開判断を担います。

---

## Pilot v0.1

初回は確認済みの5記事（scan #13、#14、#15、#16、#18）のみを掲載しています。**全記事一覧ではありません。** 番号の欠落は、当該記事の不存在や非公開を意味しません。

- [索引ページ](index.html) — 通常のHTMLとして記事リンクを列挙。JavaScriptが無効でも閲覧可能
- [記事メタデータ](data/articles.json) — JSONによる機械可読のタイトル、URL、公開日、トピックなど
- [note原文](https://note.com/alise_s99lab) — 記事本文の正式な掲載先

## 編集原則

1. タイトル・原文URL・公開日はnoteの公開ページか、作者が提示した画面で確認した情報に限定する。
2. #15「怒らない日本人が、いちばん怖い」は通常のブラウザでは非ログイン閲覧できるが、調査時のAI Web取得経路では本文を取得できなかったため、内容の要約を推測して書かない。
3. URLにトラッキング用クエリパラメータは付けない。
4. note原文の全文、未公開ドラフト、研究・事業上の非公開情報は掲載しない。
5. 既存のS. Meta研究ポータルは変更しない。
6. 公開索引の存在は、検索エンジンでの登録、検索順位向上、note本文のAI取得成功を保証しない。

## GitHub Pages公開

GitHubのこのリポジトリの **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save** を選ぶ。デプロイが完了したら、実際の公開URLで記事リンクを確認する。

## 検証

2026-10-20、scan #15を本文・タイトル無変更でnoteから再更新したが、約12時間後のAI Web取得では改善を観測していない。索引公開後は **発見できるか** と **noteの本文を取得できるか** を独立に測る。

このリポジトリは `s99lab` アカウント配下のため、A_L_I_S_EとS. MetaのGitHub上の関連性は公開情報となる。

## 検索エンジン・AIからの発見性

- このリポジトリのGitHub Pages（上記公開サイト）が検索対象となるHTMLの正本です。
- `sitemap.xml` は **記事索引トップと公開目的ページの2 URL** のみを示します。外部ドメインのnote記事URLはサイトマップに混入させず、HTML内のリンクと構造化データで案内します。
- `index.html` にcanonical URLとschema.orgの `CollectionPage / ItemList / Article` を設定しています。全文記事の正本はnoteに残ります。
- サイトマップの存在は、Search Consoleへの送信やGoogle検索への登録完了を意味しません。所有者がURL検査とサイトマップ送信結果を確認する必要があります。
- `s99lab.github.io` ホスト全体のrobots.txtは既存の研究ポータル側が管理します。プロジェクト配下にrobots.txtを置いてもホスト全体のrobots制御にはなりません。
- note本文や新号の更新は、まだ自動同期ではありません。新記事を追加する際は `index.html`、`data/articles.json`、`sitemap.xml` の整合性を確認します。
