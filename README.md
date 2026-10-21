# A_L_I_S_E scan — 公開記事索引

A_L_I_S_Eのnote公開記事を、記事番号・タイトル・公開日・テーマから探すための独立した索引です。本文の正本は [A_L_I_S_Eのnote](https://note.com/alise_s99lab) にあります。

**公開中の索引ページ：** [https://s99lab.github.io/alise-article-index/](https://s99lab.github.io/alise-article-index/)

**検索エンジン用サイトマップ：** [sitemap.xml](https://s99lab.github.io/alise-article-index/sitemap.xml)

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
- `sitemap.xml` は **本サイトの索引トップページ1 URL** のみを示します。外部ドメインのnote記事URLはサイトマップに混入させず、HTML内のリンクと構造化データで案内します。
- `index.html` にcanonical URLとschema.orgの `CollectionPage / ItemList / Article` を設定しています。全文記事の正本はnoteに残ります。
- サイトマップの存在は、Search Consoleへの送信やGoogle検索への登録完了を意味しません。所有者がURL検査とサイトマップ送信結果を確認する必要があります。
- `s99lab.github.io` ホスト全体のrobots.txtは既存の研究ポータル側が管理します。プロジェクト配下にrobots.txtを置いてもホスト全体のrobots制御にはなりません。
- note本文や新号の更新は、まだ自動同期ではありません。新記事を追加する際は `index.html`、`data/articles.json`、`sitemap.xml` の整合性を確認します。
