# Angular Camp Project
[kodlama.io](https://www.kodlama.io/) tarafından misafir öğrenci olarak katıldığım akademi eğitimi sürecinde angular öğrenmek için geliştirmiş olduğum proje.

## 🛠  Kullanılan Teknolojiler
<img src="https://img.shields.io/badge/Angular-1976D2?style=for-the-badge&logo=angular&logoColor=DD0031"/> <img src="https://img.shields.io/badge/TypeScript-2F74C0?style=for-the-badge&logo=typescript&logoColor=FFFFFF" /> <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" /> <img src="https://img.shields.io/badge/HTML5-FC4011?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/CSS3-5A8AB9?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/Bootstrap-8A12FC?style=for-the-badge&logo=bootstrap&logoColor=white" />

## 💻Projenin kurulumu
**NodeJS İndirme/Kurulum**🔧 
 - [NodeJS indirmek için](https://nodejs.org/tr/download/current/)
 - Windows/IOS için NodeJS yükleyicisini indirilir ve kurulur.
 > NodeJS JavaScript komutlarının server tarafında işlenmesini sağlamakla yükümlü olan uygulamadır.
 - Node.js kurulumu tamamlandıktan sonra terminalde `node -v` komut yazılarak versiyon kontrolü yapılabilir.

**TypeScript Compiler İndirme/Kurulum**🔧
 > NodeJS, TypeScript Compiler’ını kurmamızı hemde TypeScript Compiler’ın yazmış olduğumuz kodlarımızı JavaScript kodlarına dönüştürme aşamasında görev alacaktır.
 - Terminal ekranında `npm install -g typescript` komutunu yazarak yükleme işlemini başlatalım.
  
**Angular CLI İndirme/Kurulum**🔧
 - [ANGULAR](https://cli.angular.io/) sayfasında yer alan komutlardan ilerleyerek kuruluma başlayabiliriz.
 - Terminal ekranında `npm install -g @angular/cli` komutunu yazarak yükleme işlemini başlatalım.
 - Doğru kurulum olduğunu teyit etmek için terminal ekranına `ng v` yazalım ve angular versiyonunu görüntüleyelim.

**Proje Dosyasını İndirme/Kurulum ve Başlatma**🔧
 - Proje dosyasını .zip olarak bilgisayara indirebiliriz.
 - indirilen dosya içerisinde package.json dosyasında yer alan paketlerin kurulumu için proje klasörüne terminal ekranında yerleşelim ve `npm install` diyerek github tarafından varsayılan olarak repo içerisinde yüklenmeyen node_modules dosyasının indirilmesini gerçekleştirelim.
 - İndirme işlemi tamamlandıktan sonra yine terminal ekranında `ng serve --open` komutu ile projeyi tarayıcıda çalıştıralım.
 - Angular projesi localde çalışırken özelleştirme yapılmamış ise `localhost:4200` adresi ile çalışacaktır.
  
**Projede API dosyası İndirme/Kurulum ve Başlatma**🔧
 - Proje dosyasını .zip olarak bilgisayara indirdiğimizde src/assets/ klasörü altında yer alan `northwind-json-server` api dosyası olarak karşımıza çıkar.
 - Klasör içerisinde yer alan `.env.example` doysasının bir kopyasını aynı dosya içerisine ekleyerek adını `.env` olarak değiştirelim.
 - `npm install` diyerek node_modules dosyasının api işlemi içinde indirilmesini gerçekleştirelim.
 - İndirme işlemi tamamlandıktan sonra yine terminal ekranında `npm start` komutu ile apiyi çalıştıralım.
 - API localde çalışırken özelleştirme yapılmamış ise `localhost:3000` adresi ile çalışacaktır.
