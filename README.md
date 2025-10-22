# 📋 Task Management Dashboard

React ile yapmış olduğum, Trello benzeri ama daha minimalist ve şık bir görev yönetim dashboard'u. Sürükle-bırak, filtreleme ve arama özellikleriyle donatılmıştır.

## 🎯 Özellikler

- ✨ **Sürükle-Bırak Görev Taşıma** - dnd-kit ile smooth drag-drop
- 🎨 **Üç Kolon Yapısı** - Yapılacak, Devam Ediyor, Tamamlandı
- 🔍 **Arama ve Filtreleme** - Görev başlığı/açıklaması ve öncelik ile filtre
- 🏷️ **Görev Kartları** - Başlık, açıklama, deadline, öncelik
- 📱 **Responsive Tasarım** - Mobil ve masaüstü uyumlu
- 🌙 **Modern Dark UI** - Tailwind CSS ile şık, koyu tema
- ⚡ **Smooth Animasyonlar** - Fade-in, slide-in efektleri
- ➕ **Görev Ekleme Formu** - Modal ile yeni görev oluşturma

## 🛠️ Kullanılan Teknolojiler

- **React 18.3.1** - UI
- **Vite 5.4.1** - Build tool
- **Tailwind CSS 3.4.1** - Styling
- **dnd-kit** - Drag and drop
- **react-icons** - Icons

## 🚀 Kurulum

```bash
# Klonla
git clone https://github.com/solakramazan/react-task-dashboard.git
cd react-task-dashboard

# Paketleri yükle
npm install

# Projeyi çalıştır
npm run dev
```

Tarayıcıda `http://localhost:5173` adresine git.

## 📖 Nasıl Kullanılır?

### Görev Ekleme
1. **Yeni Görev** butonuna tıkla
2. Başlık, açıklama, deadline ve öncelik belirt
3. Durumunu seç (Yapılacak, Devam Ediyor, Tamamlandı)
4. Görev Oluştur'a tıkla

### Görev Taşıma
- Bir görevi kart üzerinden tutarak sürükle
- Başka bir kolona bırak
- Görev otomatik olarak yeni statüye hareket eder

### Arama ve Filtreleme
- Üstteki arama kutusuna görev adı yaz
- Öncelik dropdown'ından filtrele (Düşük, Orta, Yüksek)
- Filtrelenmiş görevleri gör

### Görev Silme
- Görev kartının sağ alt köşesindeki silme ikonuna tıkla
- Görev silinir

## 📂 Proje Yapısı

```
react-task-dashboard/
├── src/
│   ├── components/
│   │   ├── TaskColumn.jsx      # Kolon bileşeni
│   │   ├── TaskCard.jsx        # Görev kartı bileşeni
│   │   └── TaskForm.jsx        # Görev ekleme formu
│   ├── App.jsx                 # Ana uygulama
│   ├── index.css               # Global stiller
│   └── main.jsx                # Giriş noktası
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Özellikler Detaylı

### Sürükle-Bırak
- dnd-kit kütüphanesi kullanarak implement edildi
- Smooth ve responsive
- Kolayca kolon değiştirebilirsiniz

### Filtreleme
- Başlık ve açıklamaya göre arama
- Önceliğe göre filtreleme
- Real-time sonuçlar

### Görev Kartları
- Başlık ve açıklama
- Deadline (geçmiş deadlineler kırmızı renkle gösterilir)
- Öncelik seviyesi (Düşük, Orta, Yüksek)
- Silme butonu

## 🌟 Gelecekte Eklemek İstediklerim

- [ ] Local Storage'a kaydetme
- [ ] Kategoriler/etiketler
- [ ] Tarihçe (undo/redo)
- [ ] Kullanıcı profilleri
- [ ] Firebase entegrasyonu
- [ ] Takvim görünümü
- [ ] Reminder bildirimleri

## 👨‍💻 Yapan

**Ramazan Solak**

- GitHub: [@solakramazan](https://github.com/solakramazan)

## 📄 Lisans

MIT License

---

⭐ Beğendiyseniz yıldız vermeyi unutmayın!
