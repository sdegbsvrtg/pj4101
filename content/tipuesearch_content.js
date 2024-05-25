var tipuesearch = {"pages": [{'title': 'About', 'text': '專題題目： ODOO PLM 在協同設計上的應用 - 以鋼球平衡台設計為例 \n Application of ODOO PLM in collaborative design - taking the Design of Steel Ball Balancing Platform as an example \n 執行步驟: \n 2021 ANALYSIS OF THE ODOO SOFTWARE CAPABILITIES REGARDING PRODUCT LIFECYCLE MANAGEMENT, MANUFACTURING EXECUTION SYSTEMS AND THEIR INTEGRATION.pdf  or  local download  (password required) (Odoo 軟體在產品生命週期管理、製造執行系統及其整合上的功能分析) \n 英文單字查詢:  2021_odoo_reading.html \n \n 相關軟體： Odoo PLM , CoppeliaSim, Onshape \n members: \n 41023218 陳岳檉 snowfall-killer 41023248 蔡弦霖 smart-777 41023251 鄭立揚 sdegbsvrtg 41023254 謝鴻元 41023254 repository:  https://github.com/mdecycu/pj4101   githubpage:  http://mde.tw/pj4101 \n ODOO PLM Site:\xa0 https://pj4101.odoo.com \n  Teams 410專題 \n', 'tags': '', 'url': 'About.html'}, {'title': 'Control', 'text': 'Automatic Control Systems With Matlab \xa0(改用 Python 進行分析運算) \n A history of Automatic Control \n Principle of Automatic Control:\xa0 https://ocw.mit.edu/courses/16-06-principles-of-automatic-control-fall-2012/pages/lecture-notes/ \xa0 \n', 'tags': '', 'url': 'Control.html'}, {'title': '範例', 'text': '', 'tags': '', 'url': '範例.html'}, {'title': 'Report', 'text': '參考章節 \n Ch1 \n Introduction - 簡介 \n Ch2 \n Background and Motivation - 背景與動機 \n Ch3 \n Overview of Collaborative Design - 協同設計概述 \n Ch4 \n Introduction to ODOO PLM - ODOO PLM 簡介 \n Ch5 \n Implementation of ODOO PLM in Collaborative Design - ODOO PLM 在協同設計中的應用 \n Ch6 \n Case Study: Design of Steel Ball Balancing Platform - 案例研究：鋼球平衡台的設計 \n Ch6-1 \n System Architecture - 1D 系統架構 \n Ch6-2 \n System Architecture - 2D 系統架構 \n Ch6-3 \n Control System Design and Results 控制系統設計與結果 \n Ch7 \n Evaluation and Results - 評估與結果 \n Ch8 \n Conclusion and Future Work - 結論與未來工作 References - 參考文獻 \n', 'tags': '', 'url': 'Report.html'}, {'title': 'PLM', 'text': 'Product Lifecycle Management \n ODOO PLM Site:\xa0 https://pj4101.odoo.com \n \n', 'tags': '', 'url': 'PLM.html'}, {'title': '1d', 'text': 'Principle of Automatic Control:\xa0 https://ocw.mit.edu/courses/16-06-principles-of-automatic-control-fall-2012/pages/lecture-notes/ \n Ball and Beam balancing control system \n Ch14 of  Automatic Control with Experiments \n 模擬分析與實作 \n 參考影片 \n 其他參考影片 \n', 'tags': '', 'url': '1d.html'}, {'title': '2d', 'text': '\n ball_beam_balancing_PID_control_coppeliasim_1d_and_2d.7z \xa0 ( password required to download) \n 2019 Construction and theoretical study of a ball balancing platform.pdf \xa0( local download , 需要密碼) \n 其他參考資料查詢: \n https://www.google.com/search?q=ball+balancing+platform+dynamics+equations+derivation \n https://www.google.com/search?q=application+of+"ball+balancing+platform+dynamics+system" \n', 'tags': '', 'url': '2d.html'}, {'title': 'CHAPTER', 'text': '', 'tags': '', 'url': 'CHAPTER.html'}, {'title': 'Ch1_Introduction', 'text': '簡介\xa0 \n 本專題係藉由鋼求平衡台設計，探討協同設計作業之工作模式。 \n 1.1 研究流程 我們將藉由以下流程探討、研究、並分析協同工具在協同設計上的 應用。 \n 1.2 研究環境介紹 \n 1.2.1 協同環境 \n (一)ODOO PLM  ODOO 是一個開源的企業管理軟體，旨在幫助公司管理各種業務 流程，包括銷售、庫存、會計、製造、資源規劃和人力資源等。ODOO 提供了一個集成的平台，讓用戶可以輕鬆地管理他們的業務活動。 我們將在後面的章節詳細介紹其中的產品生命週期管理(PLM) 功能。  (二)GitHub  GitHub 是一個基於網絡的程式碼管理和協作平台，為開發者提供了 一個集中式的位置來存儲、管理和共享他們的程式碼項目。它使用Git 版本控制系統，允許用戶追蹤文件的變更、對其進行版本控制，並輕鬆 地進行協作和交流。 \n 1.2.2 設計環境 \n (一)Solvespace  Solvespace是一個開源的參數化3D CAD（計算機輔助設計）軟 體，旨在幫助用戶創建和編輯3D 模型。它具有簡單直觀的用戶界面和 豐富的功能，同時還支持多平台運行，包括Windows、Linux 和macOS。 (二)Onshape  Onshape是一個基於雲端的三維計算機輔助設計（CAD）平台， 提供了全功能的CAD 工具，讓用戶可以通過網絡瀏覽器在任何設備上 進行建模和設計。它的強大功能和靈活性使得用戶能夠輕鬆地創建複 2 雜的三維模型，進行裝配設計、模擬分析以及技術文件繪製等工作。同 時，Onshape 的即時協作功能還允許多個用戶同時訪問和編輯同一個設 計文件，從而實現更加高效的團隊合作和設計工作流程。 (三)SolidWorks SolidWorks 是一款由Dassault Systèmes 開發的三維計算機輔助設 計（CAD）軟體，廣泛應用於機械設計、工程設計和製造等領域，並且 具有強大的建模功能，使得用戶可以快速、精確地創建複雜的三維模 型，從而進行裝配設計、渲染、模擬分析等工作。 \n 1.2.3 報告環境 LaTeX LaTeX 是一種專業的排版系統，通常用於製作科學、技術和學術文檔，如論文、報告、書籍等。與常見的文字處理軟體，和MicrosoftWord 相比，LaTeX 以其強大的排版能力和對數學公式的支援而聞名。', 'tags': '', 'url': 'Ch1_Introduction.html'}, {'title': 'Ch2_Background and Motivation', 'text': '背景與動機 \n 專案製作過程中團隊的資訊共享至關重要，而版本控制則是協同設 計的核心。我們借助 ODDO 中的產品生命週期管理功能，記錄產品製造 過程中的每個步驟。如果在專案製作中出現錯誤，我們能夠快速定位問 題並解決。我們希望透過實際製作一項產品，展現 ODDO PLM 在團隊 協同上的應用。 \n 製造業企業在當今競爭激烈的市場環境中面臨著各種挑戰，包括產 品生命週期管理（PLM）、協同設計和生產流程優化等。隨著全球化和數 位化的發展，企業需要更有效的方法來管理產品開發過程，以滿足客戶 需求並保持競爭力。 \n 之所以選擇鋼球平衡台，是因為其結合自動控制、機構學、計算機 概論、電腦輔助設計 (CAD)、電腦輔助製造 (CAM) 等課程所學知識，並 且具有相當的複雜度，能夠展現團隊的專業能力和協同合作的能力。', 'tags': '', 'url': 'Ch2_Background and Motivation.html'}, {'title': 'Ch3_Overview of Collaborative Design', 'text': '協同設計概述 \n 所謂協同設計是指為了完成某一個目標，由數多名成員戮力同心以自身的專業知識和技能，共同努力創建、開發解決複雜的問題達到協同設計的理念。協同設計強調組員集體決策、創建創新且有效的解決方案，協同產品開發能讓製造商透過網路工具即時連線，為整個企業提供存取貢獻、查看和保護產品資料的能力，讓協同合作更加安全，為企業帶來更多利益。 \n 在這網路發達的世代，一個企業要在這充滿競爭的環境下生存，協同設計在產品開發中被已廣泛使用，協同設計可以確保最終產品滿足使用者需求且與保持一致，最重要的是能夠客製化產品以滿足客戶的需求，產品開發中，透過協同產品的幫忙有助於有效解決問題、快速原型設計。它使設計師、工程師、行銷人員和其他相關利益相關者能夠共同工作，分享他們的專業知識，並共同為創新和成功產品的開發做出貢獻。 \n', 'tags': '', 'url': 'Ch3_Overview of Collaborative Design.html'}, {'title': 'Ch4_Introduction to ODOO PLM', 'text': 'ODOO PLM 簡介 \n Odoo 產品生命週期管理(PLM)模組可以幫助企業對於產品的生命週期管理：從客戶需求→設計開發→產品測試→大量生產→產品維護→產品停產下架，PLM模組中可以為這個工作項目指派負責人員以及完成所需時間，負責這個項目的人員就可以對進度進行提交、修改，或是提出時間延長讓項目有更充裕的時間完成，每次項目提交都會以歷史紀錄保存，方便團隊追溯產品的修改紀錄。 \n \n', 'tags': '', 'url': 'Ch4_Introduction to ODOO PLM.html'}, {'title': 'Ch5_Implementation of ODOO PLM in Collaborative Design', 'text': '第五章  ODOO PLM  在協同設計中的應用 \n \xa0 在這章節中我們將使用 1D 系統的鋼球平衡台來展示 ODOO 中產品生命週期 (PLM) 的功能，首先我們來到 ODOO \n 主介面並選取產品生命週期 (PLM) 。 \n \n 圖 5.1 \n 進到這個頁面之後選擇主資料中的產品。 \n 圖 5.2 \n \n \xa0接下來按下新增 ( 圖 5.3) 進入到圖 5.4 \n \n 圖 5.3 \n \xa0 \n 圖 5.4 \n 我們以鋼球平衡台作為範例 \n \n 圖 5.5 \n \xa0選擇物料清單來新增鋼球平衡台所需的零件。 \n \n 圖 5.6 \n 將所需零件加入後，這些零組件會自動出現在剛才提到的產品中。 \n \n 圖 5.7 \n 將產品設定完後回到主頁面並選取新產品介紹下方的工程變更。 \n \n 圖 5.8 \n \n \xa0 \n 在這個頁面中我們選擇要製作的產品和物料清單，並且指派工作給各單位組員也可以設定完成期限或留下備註。 \n \n 圖 5.9 \n 當我們設定完成後製作鋼球平衡台這項任務就會出現在頁面上。 \n \n 圖 5.10 \n \n \xa0 \n 團隊中的主管可以藉由拖曳將圖塊任務移到相對應的狀態底下，假如專案已完成，主管可將圖塊移到已完成區域，這些狀態可依情形不同做修改或增加。 \n \n 圖 5.11 \n 若想更改用料清單可以使用主頁面中用料清單 (BOM) 更新的功能，使用方法與建立新產品雷同此處就不多贅述。 \n \n 圖 5.12 \n \xa0 \n \xa0圖 5.13 \n \n \xa0 \n', 'tags': '', 'url': 'Ch5_Implementation of ODOO PLM in Collaborative Design.html'}, {'title': 'Ch6_Case Study Design of Steel Ball Balancing Platform', 'text': '第六章 案例研究：鋼球平衡台的設計 在鋼球平衡台中我們會用到兩種不同領域的理論，數學系統模型以牛頓力學推導運動方程式後使用拉氏傳換將時域轉變成頻域，而另外一項就是自動控制中常見的PID控制器。 \n 6.1 數學系統模型 球體的動態是由物理定律推導出，以微分方程式來表達，我們將使用牛頓力學來得到球的運動方程式，並使用拉氏轉換解之。 \n 6.1.1 簡化與假設 為了得到球在平板上的運動方程式我們需假設球的幾何型態是完全球形且均質、球在平台上只在X方向移動、球在平台上只做滾動無滑動並且不考慮摩擦力。 \n 6.1.2 運動方程式 球的絕對加速度方程式由參考書籍[後期填入]得到。 \n \\begin{equation}\\mathbf{a}_a=\\dot{\\omega} \\times \\mathbf{r}+\\omega \\times(\\omega \\times \\mathbf{r})+2 \\omega \\times \\mathbf{v}_{\\text {rel }}+\\mathbf{a}_{\\text {rel }} \\end{equation} (6.1) \n 接下來我們將(6.1)式改寫為(6.2)，式中\\(\\mathbf{e}_{k 1}\\)和\\(\\mathbf{e}_{i 1}\\)代表單位向量，\\(x_p\\)代表球相對於座標系的位置，\\({\\alpha_1}\\)代表平台的傾角。 \n \\begin{equation} \\mathbf{a}_1=\\ddot{\\alpha_1} \\mathbf{e}_{k 1} \\times x_p \\mathbf{e}_{i 1}+\\dot{\\alpha_1} \\mathbf{e}_{k 1} \\times\\left(\\dot{\\alpha_1} \\mathbf{e}_{k 1} \\times x_p \\mathbf{e}_{i 1}\\right)+2 \\dot{\\alpha_1} \\mathbf{e}_{k 1} \\times \\dot{x_p} \\mathbf{e}_{i 1}+\\ddot{x_p} \\mathbf{e}_{i 1} \\end{equation} (6.2) \n 將(6.2)經過簡化整理後得到 \n \\begin{equation} \\mathbf{a}_1= \\left( \\ddot{x_p} - x_p \\dot{\\alpha_1}^2 \\right) \\mathbf{e}_{i 1} + \\left( x_p \\ddot{\\alpha_1} + 2 \\dot{\\alpha_1} \\dot{x_p} \\right) \\mathbf{e}_{j 1} \\end{equation} \n (6.3) \u2003圖6-1 \n 在圖6-1的自由體圖中，從力矩的平衡可以看出球的剩餘力。 \\begin{equation} I_b \\ddot{\\beta}_1=F_{r 1} r \\end{equation} (6.4) \n \\(I_b\\)是球的質量慣性矩，\\(\\beta_1\\)是球相對於其初始位置在平台中心的角度，\\(r\\)是球的半徑，\\(F_r\\)是來自平台對球的作用力，我們假設求在平台上並無滑動所以我們可以根據位置定義相對角度\\(\\beta\\)。 \\begin{equation} \\beta_1=-\\frac{x_p}{r} \\end{equation} (6.5) \n 為了求解(6.4)中的Fr，我們將(6.5)式的二次時間導數代入(6.4)式中得到(6.6)式。 \u2003 \\begin{equation} F_r=-\\frac{I_b \\ddot{x_p}}{r^2} \\end{equation} (6.6) \n 球在平台上受到的力和平台對球施加的力之間的平衡，由(6.3)式中的加速度和(6.6)中的力導致，由此的到動態系統的運動方程式。 \\begin{equation} \\left(\\frac{I_b}{r^2}+m_b\\right) \\ddot{x_p}+m_b g \\sin \\alpha_1-m_b x_p{\\dot{\\alpha_1}}^2=0 \\end{equation} (6.7) \n 為了做拉式轉換我們稍微整理方程式。 \\begin{equation} \\ddot{x}=\\frac{m_b r_b^2\\left(x_p \\dot{\\alpha}_1^2-g \\sin \\alpha_1\\right)}{m_b r_b^2+I_b} \\end{equation} (6.8) \n 接下來我們在\\(X_p=0\\),\\(\\alpha_1=0\\)對(6.8)式作線性化。 \n \\begin{equation} \\ddot{x}=\\frac{m_b g \\alpha_1 r^2}{m_b r_b{ }^2+I_b} \\end{equation}(6.9) \n 當\\(\\alpha_1\\)出現小變動時線性化可得(6.9)式。 接下來當我們將Ib也就是球體的質量慣性矩代入我們可以得到(6.10)，我們可以觀察到該系統的運動方程式和該球體的半徑和質量無關。 \n \\begin{equation} \\ddot{x}=\\frac{5}{7} g \\alpha_1 \\end{equation} \n (6.10) \n 最後我們對(6.10)作拉式轉換得到(6.11) \n \\begin{equation} s^2 X=\\frac{5}{7} g A_1 \\end{equation}(6.11) \n \n 在推導運動運動方程式後我們得到了平台角度和球的關係式，接下來我們利用 geogebra 進行模擬得到馬達轉角和平台角度的關係圖利用擬合曲線來得到馬達轉角和平台的關係式 ( 圖6-2 ) 而超過正 70 度的部分由於桿件設計反而造成平台角度下降 ( 由圖6- 3 可觀察到 ) ，所以我們在最後程式設計的部分有將馬達角度限制，得到方程式後做線性化並拉式轉換就能利用這兩個關係式來獲得整體系統轉移函數。 \n α  = 0.233371 * θ + -0.293753 (6.12) \n \n 圖6-2 \n \n 圖6-3 \n 6.2 自動控制理論 \n 我們在 1D 鋼球平衡台將會使用到 PID 控制器來控制球體。 \n 6.2.1 PID控制器 \n \xa0\xa0 PID控制器是目前最廣泛使用的控制器，利用回授系統將訊號回傳就可以利用與設定點的偏差得到 e(t) 值，接下來我們將介紹 PID 中 P 、 I 、 D 是如何對系統產生影響。 \n \\begin{equation} u(t)=K_P e(t)+K_I \\int_0^t e(\\tau) d \\tau+K_D \\frac{d e(t)}{d t} \\end{equation} (6.12) \n 6.2.2 比例控制律 (K p ) \n \xa0 \xa0 在系統中加入 K p 可以增快系統反應速度，但是有可能會造成系統響應阻尼比下降導致系統不穩定。 \n \\begin{equation}U_P(t)=K_P e(t)\\end{equation} \n \xa0 (6.13) \n 6.2.3 積分控制律 (K i ) \n \xa0\xa0 K i 可以累計誤差，在系統反應初期作用不大，但經過一段時間的累積過後可以藉由先前累積的數據和設定值的平均誤差來讓系統穩定。 \n \\begin{equation} u(t)= K_I \\int_0^t e(\\tau) d \\tau \\end{equation} (6.14) \n \xa0 \n 6.2.4 微分控制律 (K d ) \n \xa0\xa0 對誤差在時域進行微分可以得到誤差隨時間改變的趨勢，能有效預測系統反應，來改善暫態響應增加系統問穩定性。 \n \\begin{equation} u(t)= K_D \\frac{d e(t)}{d t} \\end{equation} \n (6.15) \n \n', 'tags': '', 'url': 'Ch6_Case Study Design of Steel Ball Balancing Platform.html'}, {'title': 'Ch6-1', 'text': '1D 系統架構 \n 設計理念 \n 我們以鋼球平衡台作為專題的主體，然後寫程式驅動雷射測距感測器當鋼球遠離時platfor，當鋼球靠近時platform放下，重複此動作直至鋼球平衡台平衡。 \n \n 馬達角度所對應之平台角度關係 \n \n 使用 solidwork 2023 進行繪圖 \n \n SOLIDWORKS是一款用於設計各種產品和零件。 模擬和分析： 提供模擬和分析工具，用於測試設計的性能、耐久性和材料屬性。 製造和加工： 支援數控機床編程和工具路徑生成，提高製造效率。 綜合性： 提供組件建模、裝配設計、繪圖生成、動態模擬、流體動力學模擬等多個功能。 \n platform \n 第一版本鋼球平衡台的 platform 軌道長度為 200mm 整體的寬度為 30mm  並給定深度填料 11mm  \n \n 軌道上方寬度為 8.5mm 下方為 7.2mm 深 4mm 並將紅圈處深伸長除料選擇完全貫穿 \n \n 下方配合處長 30mm 寬 6mm  繪製好圖形草圖 \n \n 給予尺寸後伸長填料 25mm \n \n 填料完成後再圖形上畫一個 2.9mm 的小孔並進行伸長除料以便與其他零件配合 \n \n 第一版 platform 完成圖 \n \n 修改部分 \n 軌道上方增加長 26.2mm 寬 2mm 的貫穿凹槽，用於放置感應器 \n \n 下方接合處新增 R10 圓角 \n \n 最終Platform零件圖 \n \n 3D列印成果 \n \n base \n 第一版 Base 底的長為 237mm 寬為 150mm \n \n 在底板長 55mm 寬 54mm 處繪製一個 12mmX12mm 的方形柱並向上填料 100mm \n \n 在方柱上方繪製一個長30.28mm寬 20 的長方體然後在長方體上畫直徑20mm的半圓最後在圓的中心繪製一個3.98mm的小孔最後在長方體上畫一個長30mm寬10.8mm的小長方體伸長除料選擇完全貫穿方便與上方platform配合 \n \n 在距離方柱中心長 129mm 寬 25mm 處繪製一個長 31mm 寬 20mm 向上填料 7mm 的小平台用來定位馬達 \n \n 並且在兩邊加畫底 15mm 高 45mm 的三角形支撐架防止馬達晃動 \n \n 第一版base 完成圖 \n \n 修改部分 \n 底部去除浪費的部分改以長165.6mm圓直徑22.35mm的直狹槽代替 \n \n 為了好收納將左方柱子拔除留下一凹槽方便後續配合及螺絲孔 \n \n 最終base完成圖 \n \n 3D列印成果 \n \n support \n 從底座拔除的部分目的好收納尺寸都沒有改變 \n 最終support完成圖 \n \n 3D列印成果 \n \n link \n 上方連結處與support尺寸一致皆為長30.28mm寬 20 的長方體然後在長方體上畫直徑20mm的半圓最後在圓的中心繪製一個3.98mm的小孔最後在長方體上畫一個長30mm寬10.8mm的小長方體伸長除料選擇完全貫穿方便與上方platform配合 \n \n 下方為12mmX12mm的方柱並填料68mm方便與馬達進行配合 \n \n 最終link完成圖 \n \n 3D列印成果 \n \n assemble \n 組合完成圖 \n \n \n 驅動方式 \n 使用金屬齒輪伺服馬達配合程式控制平台 \n 程式放置於6-3 \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Ch6-1.html'}, {'title': 'Ch6-2', 'text': '2D 系統架構 \n', 'tags': '', 'url': 'Ch6-2.html'}, {'title': 'Ch6-3', 'text': '控制系統設計與結果 \n', 'tags': '', 'url': 'Ch6-3.html'}, {'title': 'Ch7_Evaluation and Results', 'text': '評估與結果 \n', 'tags': '', 'url': 'Ch7_Evaluation and Results.html'}, {'title': 'Ch8_Conclusion', 'text': '結論 \n 在本次的專題中，我們使用 Odoo 作為產品設計的基底，並且結合 SolidWorks  和  Coppeliasim 設計零件及模擬，再加入 github 進行協同，最後使用 3D 列印列印零件加以組裝然後配合機電控制實現從零開始生產並且製造出一個產品。在這個專裡我們學到了每種程式不同功用，並使用各個程式的優缺點加以揉合後產生一加一大於二的功效。 \n \xa0 \n 在專題中我們在設計、仿真、協同、管理方面充分利用不同軟體平台的功能。首先我們使用  SolidWorks  來設計產品的尺寸及 3D 模型，導入  Coppeliasim  中進行組合後的仿真和其運動的虛擬測試，以確保產品能正常運動和使用。同時在  Odoo  中的產品生命週期管理 (PLM) 模組創建相對應的管理系統，以管理產品的生產、庫存和銷售，然後將過程在 github 裡面建立倉儲與其分支進行協同，最後 3D 列印出整個零件加入機電控制。這要求我們要具備跨越不同軟體平台的技術能力和整合能力，以確保各個方面的協調和一致性。 \n \xa0 \n 有了這些便捷的軟體後我們可以先在 SolidWorks  進行零件的初次設計，然後到 Coppeliasim  中進行確實的仿真模擬。我們可以在 Coppeliasim 中模擬產品在不同條件下的行為和性能，並進行虛擬測試及後續的改進及優化。這使我們能夠更好地了解產品的現實狀況及日後所需改進的問題，並更有效地設計和製造產品。 \n \xa0 \n 在專題中，我們認為 ODOO 不僅能定義產品的屬性還能根據產品的類型選定不同的模組進行使用，甚至還可以設置生產的流程，物料清單及生產的計畫等等，其中最厲害的莫過於產品生命週期管理 (PLM) 模組，能從需求到設計開發到產品測試到大量生產到產品維護再到產品停產下架完成一整套的產品週期流程，可謂是從零到有甚至於再到產品的終結。 \n \xa0 \n 整個專題中我們學到了如何獨當一面的設計和如何與其他成員協同分工，在這個過程中不僅學到了許多新的技能和知識，更體驗到了團隊合作和創新思維的重要性，這些在未來職場上班時都將會寶貴的經驗', 'tags': '', 'url': 'Ch8_Conclusion.html'}, {'title': 'References', 'text': '\xa0參考文獻 \n http://163.17.20.49/AIT2010/ft_198.pdf \xa0 \n', 'tags': '', 'url': 'References.html'}, {'title': 'Ref', 'text': 'PLM: \n https://www.odoo.com/documentation/16.0/zh_TW/applications/inventory_and_mrp/plm.html \n PLM Volume 1 on link.springer.com \n PLM Volume 2 on link.springer.com \n Product Lifecycle Management Vol 1.pdf \n Product Lifecycle Management Vol 2.pdf \n Ball Balancing Control: \n 1D: \n Design and Implementation of Ball and Beam System Using PID Controller.pdf \n Modeling and Control of the Ball and Beam Process.pdf \n Ball Beam PID Feedback Control.pdf \n A Robotic Ball Balancing Beam.pdf \n Ball Balancing Beam.pdf \n 2D: \n Ball-Balancer.pdf \n Ball Balancing Table Courseware Matlab.pdf \n Ball_on_the_plate_balancing_control_system.pdf \n Offset-free MPC for a ball-balancing Stewart platform.pdf \n A Two-Degree-Of-Freedom Ball Balancing PID Controller.pdf \n Construction and Theoretical Study of a ball balancing platform.pdf \n Control of a ball-and-plate system using a State-feedback controller.pdf \n Functional observer-based feedback controller for ball balancing table.pdf \n 參考書籍: \n [1]\xa0N. Apazidis, Mekanik II, Partikelsystem, stel kropp och analytisk mekanik, vol. 1:3. Studentlitteratur AB, 2017. \n \n', 'tags': '', 'url': 'Ref.html'}, {'title': 'test page', 'text': '\n \\chapter{案例研究：鋼球平衡台的設計} 在鋼球平衡台中我們會用到兩種不同領域的理論，數學系統模型以牛頓力學推導運動方程式後使用拉氏傳換將時域轉變成頻域，而另外一項就是自動控制中常見的PID控制器。 \n \\section{數學系統模型} 球體的動態是由物理定律推導出，以微分方程式來表達，我們將使用牛頓力學來得到球的運動方程式，並使用拉氏轉換解之。 \n \\subsection{簡化與假設} 為了得到球在平板上的運動方程式我們需假設球的幾何型態是完全球形且均質、球在平台上只在XY方向移動、球在平台上只做滾動無滑動並且不考慮摩擦力。 \n \\subsection{運動方程式} 球的絕對加速度方程式由參考書籍[後期填入]得到。 \n \\begin{equation} \\mathbf{a}_a=\\dot{\\omega} \\times \\mathbf{r}+\\omega \\times(\\omega \\times \\mathbf{r})+2 \\omega \\times \\mathbf{v}_{\\text {rel }}+\\mathbf{a}_{\\text {rel }} \\label{((6.1))} \\end{equation} \\\\ \n 接下來我們將\\ref{((6.1))}式改寫為\\ref{(6.2)}，式中\\(\\mathbf{e}_{k1}\\)和\\(\\mathbf{e}_{i1}\\)代表單位向量，\\(x_p\\)代表球相對於座標系的位置，\\(\\alpha_1\\)代表平台的傾角。 \n \\begin{equation} \\mathbf{a}_1=\\ddot{\\alpha_1} \\mathbf{e}_{k1} \\times x_p \\mathbf{e}_{i1}+\\dot{\\alpha_1} \\mathbf{e}_{k1} \\times\\left(\\dot{\\alpha_1} \\mathbf{e}_{k1} \\times x_p \\mathbf{e}_{i1}\\right)+2 \\dot{\\alpha_1} \\mathbf{e}_{k1} \\times \\dot{x_p} \\mathbf{e}_{i1}+\\ddot{x_p} \\mathbf{e}_{i1} \\label{(6.2)} \\end{equation} \\\\ \n 將\\ref{(6.2)}經過簡化整理後得到 \n \\begin{equation} \\mathbf{a}_1= \\left( \\ddot{x_p} - x_p \\dot{\\alpha_1}^2 \\right) \\mathbf{e}_{i1} + \\left( x_p \\ddot{\\alpha_1} + 2 \\dot{\\alpha_1} \\dot{x_p} \\right) \\mathbf{e}_{j1} \\label{(6.3)} \\end{equation}\\\\ \n \\begin{figure}[h] \\centering \\includegraphics[width=0.7\\textwidth]{../images/圖6-2.png} \\caption{圖6-2} \\label{fig:6-2} \\end{figure} \n 在圖\\ref{fig:6-2}的自由體圖中，從力矩的平衡可以看出球的剩餘力。 \n \\begin{equation} I_b \\ddot{\\beta}_1=F_{r1} r \\label{(6.4)} \\end{equation} \\\\ \n \\(I_b\\)是球的質量慣性矩，\\(\\beta_1\\)是球相對於其初始位置在平台中心的角度，\\(r\\)是球的半徑，\\(F_r\\)是來自平台對球的作用力，我們假設求在平台上並無滑動所以我們可以根據位置定義相對角度\\(\\beta\\)。 \n \\begin{equation} \\beta_1=-\\frac{x_p}{r} \\label{(6.5)} \\end{equation} \\\\ \n 為了求解\\ref{(6.4)}中的\\(F_r\\)，我們將\\ref{(6.5)}式的二次時間導數代入\\ref{(6.4)}式中得到\\ref{(6.6)}式。 \n \\begin{equation} F_r=-\\frac{I_b \\ddot{x_p}}{r^2} \\label{(6.6)} \\end{equation} \\\\ \n 球在平台上受到的力和平台對球施加的力之間的平衡，由\\ref{(6.3)}式中的加速度和\\ref{(6.6)}中的力導致，由此得到動態系統的運動方程式。 \n \\begin{equation} \\left(\\frac{I_b}{r^2}+m_b\\right) \\ddot{x_p}+m_b g \\sin \\alpha_1-m_b x_p{\\dot{\\alpha_1}}^2=0 \\label{(6.7)} \\end{equation} \\\\ \n 為了做拉式轉換我們稍微整理方程式。 \n \\begin{equation} \\ddot{x}=\\frac{m_b r_b^2\\left(x_p \\dot{\\alpha}_1^2-g \\sin \\alpha_1\\right)}{m_b r_b^2+I_b} \\label{(6.8)} \\end{equation} \\\\ \n 接下來我們在xp=0,α1=0對\\ref{6.8}式作線性化。 \n \\begin{equation} \\ddot{x}=\\frac{m_b g \\alpha_1 r^2}{m_b r_b{ }^2+I_b} \\label{(6.9)} \\end{equation}\\\\ \n 當\\(\\alpha_1\\)出現小變動時線性化可得\\ref{6.9}式。接下來當我們將\\(I_b\\)也就是球體的質量慣性矩代入我們可以得到\\ref{(6.10)}，我們可以觀察到該系統的運動方程式和該球體的半徑和質量無關。 \n \\begin{equation} \\ddot{x}=\\frac{5}{7} g \\alpha_1 \\label{(6.10)} \\end{equation}\\\\ \n 最後我們對\\ref{(6.10)}作拉式轉換得到\\ref{(6.11)} \n \\begin{equation} s^2 X=\\frac{5}{7} g A_1 \\label{(6.11)} \\end{equation}\\\\', 'tags': '', 'url': 'test page.html'}]};