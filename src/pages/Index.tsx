import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">CREATOR CHANNEL</h1>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              Главная
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              О канале
            </a>
            <a
              href="#videos"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              Видео
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Icon name="Youtube" className="mr-2" size={16} />
            Подписаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black"
      >
        <div className="absolute inset-0 bg-[url('/img/f824eabd-a009-4549-8e68-5e9e61ca31be.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge className="bg-red-600/20 text-red-400 border-red-600/50 mb-4">
            Кино и Творчество
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Анализ Фильмов
            <span className="text-red-500"> & Креатив</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Глубокие обзоры кино, анализ сюжетов и творческие проекты.
            Подписывайтесь на канал для качественного контента о мире
            кинематографа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть видео
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3"
            >
              <Icon name="Bell" className="mr-2" size={20} />
              Уведомления
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              О канале
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/img/aec12eb5-e586-4c45-9eaf-94e0a1d0a2af.jpg"
                  alt="Создатель канала"
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Добро пожаловать на мой канал!
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Здесь вы найдете качественные обзоры фильмов, глубокий анализ
                  сюжетов и персонажей, а также мои творческие проекты. Я изучаю
                  кинематограф уже более 5 лет и делюсь своими открытиями с
                  вами.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">150K+</div>
                    <div className="text-gray-400">Подписчиков</div>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-red-500">500+</div>
                    <div className="text-gray-400">Видео</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-red-600/20 text-red-400"
                  >
                    Кино
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-600/20 text-red-400"
                  >
                    Обзоры
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-600/20 text-red-400"
                  >
                    Анализ
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-600/20 text-red-400"
                  >
                    Творчество
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Последние видео
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Анализ "Дюны" 2024', views: "250K", duration: "15:30" },
              {
                title: "Как снимают блокбастеры",
                views: "180K",
                duration: "22:45",
              },
              {
                title: "Топ-10 фильмов года",
                views: "320K",
                duration: "18:12",
              },
              { title: "Секреты монтажа", views: "95K", duration: "12:20" },
              {
                title: "Обзор Marvel Phase 5",
                views: "420K",
                duration: "25:15",
              },
              {
                title: "Как создать фильм дома",
                views: "160K",
                duration: "19:45",
              },
            ].map((video, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-gray-800 to-black rounded-t-lg flex items-center justify-center">
                      <Icon name="Play" size={40} className="text-red-500" />
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white mb-2">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 flex items-center gap-2">
                    <Icon name="Eye" size={16} />
                    {video.views} просмотров
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              <Icon name="Youtube" className="mr-2" size={20} />
              Смотреть все видео
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-white">Контакты</h2>
            <p className="text-xl text-gray-300 mb-8">
              Свяжитесь со мной для сотрудничества или просто чтобы поделиться
              мнением о фильмах!
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Mail"
                    size={32}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-gray-400">channel@example.com</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="MessageCircle"
                    size={32}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Telegram</h3>
                  <p className="text-gray-400">@filmcreator</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6 text-center">
                  <Icon
                    name="Instagram"
                    size={32}
                    className="text-red-500 mx-auto mb-4"
                  />
                  <h3 className="text-white font-semibold mb-2">Instagram</h3>
                  <p className="text-gray-400">@filmcreator</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <Icon name="Youtube" className="mr-2" size={20} />
                YouTube
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <Icon name="Twitter" className="mr-2" size={20} />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
              >
                <Icon name="Instagram" className="mr-2" size={20} />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Creator Channel. Все права защищены.</p>
            <p className="mt-2">Создано с ❤️ для любителей кино</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
