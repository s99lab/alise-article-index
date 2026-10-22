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

## 公開記事アーカイブ｜分類と収録範囲（2026-10-22）

SCAN（長編の構造分析）とMEMO（短編の考察）は独立した番号系列として扱います。別に、プロフィール記事「A_L_I_S_E（アライズ）を起動しました」と、読書ガイド「はじめてのA_L_I_S_E｜まず読んでほしい5本」が各1本あります。

現時点の索引は**原文URLを確認できた36件（SCAN 34件、MEMO 2件）**です。全公開記事を網羅したと宣言するものではありません。初回Pilotの5記事（SCAN #13/#14/#15/#16/#18）は、その原文URL・記事メタデータ・推測しない要約の原則を保持しました。

- [公開記事索引](index.html)：新しい順／すべて・SCAN・MEMOの切替／タイトル・番号検索
- [機械可読メタデータ](data/articles.json)：記事ごとのタイプ・原文URL・公開日、案内記事の照合状態、未照合番号を区別
- [noteの全記事一覧](https://note.com/alise_s99lab)：本文の正本。案内記事2本は正式タイトル・原文URL・公開日時を照合済み

### 残る照合

- 原文URL・公開日が未照合のSCAN番号：#02、#03、#05、#08、#11、#12、#17、#22。これら番号の公開状態は未確認であり、不存在・非公開とも判定しません。
- SCAN #33は原文URLとタイトルを確認済み、公開日のみ未照合。
- MEMO #01と#05は原文確認済み。#02～#04は原文URL未照合。MEMO全体の公開件数は引き続き未確定。
- 案内記事2本はnoteの正式原文を照合済み：[起動記事](https://note.com/alise_s99lab/n/n1abf7de120f8)（2026年6月24日）・[初めての方向け5本](https://note.com/alise_s99lab/n/n14c398e27452)（2026年7月27日）。紹介された5記事は旧Pilot5記事と別の選定で、シリーズ記事を重複登録しません。

### Pilot v0.1（履歴）

初回の試験版では確認済みの5記事（SCAN #13、#14、#15、#16、#18）のみを掲載しました。現在のアーカイブ件数とは異なる過去の実施記録です。

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
- note本文や新号の更新は自動同期ではありません。新記事を追加する際は `index.html`・`data/articles.json`・JSON-LDの一致を検査し、サイトマップにはこのドメインの公開URLのみを記載します。
