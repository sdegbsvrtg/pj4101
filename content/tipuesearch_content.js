var tipuesearch = {"pages": [{'title': 'Research', 'text': '專題題目： AI 在平面機構設計上的應用 \n 相關軟體：Pyslvs，CoppeliaSim，Leo editor，Python and Mojo language system，Solid Edge \n 界定何謂 AI。 \n 瞭解 Pyslvs 的運作原理及使用方法。 \n 學習如何利用 Msys2 編譯 Pyslvs。 \n 瞭解平面機構設計(合成)的類別及原理。 \n 瞭解各類型機構設計的實際應用。 \n 瞭解 CoppeliaSim XML 檔案格式與架構。 \n 瞭解如何利用 Python API 驅動 Solid Edge 零組件。 \n \n 以下為擬進行的研究步驟與議題: \n \n 根據 編譯範例 的說明, 利用 Msys2 完成 Solvespace 原始碼的編譯. \n 從 這裡 , 可知 Solvespace 檔案格式相關內容. \n 從 Solvespace 原始碼找出系統如何將特定 3D 轉為 STL 檔案? \n 研究如何從一個簡單的 .slvs 3D 零件轉為 STL 格式? \n 研究如何從 Solvespace 轉出的組立檔案, 以 C 或 Python 切割出多零件 STL 檔案? \n 研究假如要直接從 .slvs 組立檔案轉為 CoppeliaSim 場景檔案格式, 該如何進行? \n 閱讀  https://homes.cs.washington.edu/~todorov/papers/ErezICRA15.pdf , 了解假如要自行利用上述取得的零組件 STL 檔案, 直接套用 Dynamic Simulation Engine 進行模擬, 該如何進行? \n', 'tags': '', 'url': 'Research.html'}, {'title': 'Solvespace', 'text': 'https://www.youtube.com/watch?v=yUa3fnDbeWw   \n https://ltnr.ca/Lib/solvespaceTips.html   \n https://www.farwire.net/SolveSpace-LearningGuide.htm   \n https://www.youtube.com/watch?v=vbI9UImoXME   \n https://thenybble.de/posts/solvespace-mini-tutorial/  ', 'tags': '', 'url': 'Solvespace.html'}, {'title': 'About', 'text': ' 2023 專題第一組 \n 利用 CoppeliaSim 建立下列機械手臂場景, 在瀏覽器中以 zmqRemote API 進行 Pick and Place 操控, 並嘗試自行將機械手臂零組件轉入瀏覽器後, 以 Websocket 操控虛擬場景與實體機械手臂. \n https://projecthub.arduino.cc/jonserra/compact-3d-printed-robotic-arm-and-controller-f57d27 \xa0 \n  題目:  \n 網際機械手臂運動控制與模擬 \n Web-based Motion Control and Simulation of Robotic Arm \n  members:  \n 41023218陳岳檉 snowfall-killer \n 41023248蔡弦霖 smart-777 \n 41023251鄭立揚 sdegbsvrtg \n 41023254謝鴻元 41023254 \n \n repository:   https://github.com/mdecycu/pj4101  \n githubpage:       http://mde.tw/pj4101      \n  Teams 410專題 ', 'tags': '', 'url': 'About.html'}, {'title': '網際 Robot', 'text': '利用 WebGL、Javascript 與零組件的 STL 檔案格式, 可以直接在瀏覽器中顯示機械臂與工作場景, 如下列連結所示: \n  pick_and_place_robodk_web.html  \n 其中直接使用   https://github.com/toji/gl-matrix   , 並透過類似   https://github.com/AlmondFlour/WebGL-Robot/blob/master/webgl-utils.js   的工具程式, 完成 3D 零組件場景的展示. \n 從   https://github.com/mdecycu/WebGL-Robot   可知透過 Javascript 程式能夠控制瀏覽器中機械臂與各 3D 零件的位置及方位. \n 且從最上方取自 RoboDK Web server 所送出的機械臂工作場景, 可以發現是採用 Websocket 由伺服器送出控制機械臂的變數值, 以便進行遠端操控模擬. \n 因此, 若能使用 Python + Flask 建立送出控制訊號的 Websocket, 來控制 WebGL 展示的機械臂工作場景, 便可將近端模擬的流程擴大到全球資訊網中, 以作為協同產品設計中的一個系統模擬環節. \n 一旦上述各項測試完成, 即可接續完成: \n 網際機械手臂運動控制與模擬 \n Web-based Motion Control and Simulation of Robotic Arm \n 參考資料: \n  Javascript Syntax Quick Reference   (需要下載密碼) \n  Beginning WebGL for HTML   (需要下載密碼) \n  Interactive Computer Graphics   (WebGL, 需要下載密碼) \n  2003 A Web-based Robotic Design and Simulation System in Java 3D  \n  2022 Assembly: A Web-Based Multi-Robot Programming and Simulation Tool \n \n', 'tags': '', 'url': '網際 Robot.html'}, {'title': '進度紀錄', 'text': '', 'tags': '', 'url': '進度紀錄.html'}, {'title': '0921', 'text': '1.服用心靈雞湯 \n 2.研究車門鎖 \n 3.整理實驗室 \n 4.開始經營小組網站 \n \n', 'tags': '', 'url': '0921.html'}, {'title': 'Robot', 'text': 'https://youtu.be/5toNqaGsGYs \n 控制卡: \n Arduino Leonardo + headers \n Servo Motor \n https://github.com/mdecycu/CompactRoboticArm \n BuildSomeStuff-CompactRoboticArm-399a44a.zip \n', 'tags': '', 'url': 'Robot.html'}, {'title': 'Brython', 'text': 'cmsite: wcms use   https://github.com/mdecycu/cmsimde   as submodule \n  https://en.wikipedia.org/wiki/Python_(programming_language)  \n Examples: \n  https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d  \n  https://www.geeksforgeeks.org/python-programming-examples/  \n  https://www.programiz.com/python-programming/examples  \n  htt', 'tags': '', 'url': 'Brython.html'}]};