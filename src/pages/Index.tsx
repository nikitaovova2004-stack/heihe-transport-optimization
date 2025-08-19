import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [weight, setWeight] = useState('')
  const [volume, setVolume] = useState('')
  const [truckType, setTruckType] = useState('tent')
  const [destination, setDestination] = useState('')
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null)

  const calculatePrice = () => {
    const basePrice = 180000
    const weightFactor = parseFloat(weight) * 8000
    const volumeFactor = parseFloat(volume) * 2000
    const typeFactor = truckType === 'ref' ? 1.3 : truckType === 'carrier' ? 1.2 : truckType === 'tral' ? 1.4 : 1
    const price = (basePrice + weightFactor + volumeFactor) * typeFactor
    setCalculatedPrice(Math.round(price))
  }

  const truckTypes = [
    { value: 'tent', label: 'Тент', capacity: '82-120 м³, 20-22 т', icon: 'Package' },
    { value: 'ref', label: 'Реф', capacity: '86 м³, -20°C ... +25°C', icon: 'Snowflake' },
    { value: 'carrier', label: 'Автовоз', capacity: '8-10 легковых', icon: 'Car' },
    { value: 'tral', label: 'Трал', capacity: '60 т, низкорамный', icon: 'Truck' }
  ]

  const routes = [
    { from: 'Хэйхэ', to: 'Москва', duration: '8 дней', price: '220 000', color: 'bg-red-500' },
    { from: 'Хэйхэ', to: 'Казань', duration: '9 дней', price: '195 000', color: 'bg-blue-500' },
    { from: 'Хэйхэ', to: 'Екатеринбург', duration: '7 дней', price: '185 000', color: 'bg-green-500' },
    { from: 'Хэйхэ', to: 'Новосибирск', duration: '6 дней', price: '165 000', color: 'bg-purple-500' },
    { from: 'Хэйхэ', to: 'СПб', duration: '10 дней', price: '245 000', color: 'bg-orange-500' },
    { from: 'Хэйхэ', to: 'Челябинск', duration: '8 дней', price: '175 000', color: 'bg-teal-500' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-primary">METEOR</div>
              <div className="h-8 w-px bg-gray-300 hidden md:block"></div>
              <div className="hidden md:block text-sm text-gray-600">
                Международные автоперевозки
              </div>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Услуги
              </a>
              <a href="#routes" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Маршруты
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">
                О компании
              </a>
              <a href="#contacts" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Контакты
              </a>
              <Button className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                Рассчитать стоимость
              </Button>
            </nav>
            <Button variant="ghost" className="lg:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gray-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                  FTL-перевозки<br />
                  из <span className="text-secondary">Хэйхэ</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Тент, рефрижератор, автовоз, трал — 7-12 дней.<br />
                  Собственный парк 180 машин, склад 5000 м² в Хэйхэ
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">180</div>
                  <div className="text-sm text-gray-600">единиц техники</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">12</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">4300</div>
                  <div className="text-sm text-gray-600">рейсов/год</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Калькулятор FTL</h3>
                  <p className="text-gray-600">Рассчитайте стоимость за 2 минуты</p>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Вес (тонн)
                      </label>
                      <Input 
                        placeholder="20"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Объём (м³)
                      </label>
                      <Input 
                        placeholder="82"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Тип транспорта
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {truckTypes.map((type) => (
                        <Button
                          key={type.value}
                          variant={truckType === type.value ? "default" : "outline"}
                          onClick={() => setTruckType(type.value)}
                          className={`h-16 flex-col space-y-1 ${
                            truckType === type.value 
                              ? 'bg-primary text-white' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <Icon name={type.icon as any} size={20} />
                          <span className="text-xs font-medium">{type.label}</span>
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Город назначения
                    </label>
                    <Input 
                      placeholder="Москва"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  
                  {calculatedPrice && (
                    <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">
                          {calculatedPrice.toLocaleString()} ₽
                        </div>
                        <div className="text-secondary font-semibold mb-1">
                          Стоимость доставки
                        </div>
                        <div className="text-sm text-gray-600">
                          Срок: 7-12 дней
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={calculatePrice}
                    size="lg"
                    className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold h-12"
                  >
                    Рассчитать стоимость
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Наш парк техники</h2>
            <p className="text-xl text-gray-600">180 единиц специализированного транспорта</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {truckTypes.map((truck, index) => (
              <div key={truck.value} className="group">
                <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 group-hover:bg-white border-2 border-transparent group-hover:border-secondary/20">
                  <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Icon name={truck.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{truck.label}</h3>
                  <p className="text-gray-600 mb-4">{truck.capacity}</p>
                  <Badge className="bg-secondary/20 text-primary hover:bg-secondary/30">
                    {(index + 1) * 15}+ единиц
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Популярные маршруты</h2>
            <p className="text-xl text-gray-600">Регулярные рейсы из Хэйхэ в крупнейшие города России</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${route.color}`}></div>
                    <span className="text-gray-600 text-sm">{route.from}</span>
                    <Icon name="ArrowRight" size={16} className="text-gray-400" />
                    <span className="font-semibold text-primary">{route.to}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Срок доставки</div>
                    <div className="text-lg font-semibold text-primary">{route.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">от</div>
                    <div className="text-lg font-bold text-secondary">{route.price} ₽</div>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Забронировать
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Under Key Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Услуги под ключ</h2>
            <p className="text-xl text-gray-600">Полный цикл логистических услуг</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Icon name="Truck" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Доставка FTL/LTL</h3>
              <p className="text-gray-600">Полные и сборные грузы</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Icon name="FileText" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Таможенное оформление</h3>
              <p className="text-gray-600">HS-коды, декларации</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Icon name="Package" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Консолидация</h3>
              <p className="text-gray-600">Склад 5000 м² в Хэйхэ</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-xl flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Страхование CMR</h3>
              <p className="text-gray-600">До 3 млн ¥</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">О компании</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                ТК МЕТЕОР — ведущий оператор международных автоперевозок между 
                Китаем и Россией. Мы специализируемся на FTL доставке из Хэйхэ 
                с собственным парком техники и складской базой.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">Членство в СРО логистических компаний</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">Партнерство с China Railway Express</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-gray-700">Лицензия на международные перевозки</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
              >
                Узнать больше
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="/img/be6739ab-923c-4fd5-a4b5-51cecaeced14.jpg" 
                alt="Парк техники ТК Метеор" 
                className="w-full rounded-2xl shadow-lg"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">4.8</div>
                    <div className="text-sm text-gray-600">180+ отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-gray-200 mb-8">
                Получите консультацию и расчет стоимости доставки прямо сейчас
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Офис в Хэйхэ</div>
                    <div className="text-gray-200">ул. Центральная, 123, Хэйхэ, КНР</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Телефон в Хэйхэе</div>
                    <div className="text-gray-200">+86 (909) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">WhatsApp 24/7</div>
                    <div className="text-gray-200">Русскоязычный менеджер</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Быстрая заявка</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <Input placeholder="Введите имя" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input placeholder="email@example.com" className="h-12" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий
                  </label>
                  <Input placeholder="Опишите ваш груз" className="h-20" />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-secondary text-primary hover:bg-secondary/90 font-semibold h-12"
                >
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">METEOR</div>
              <p className="text-sm text-gray-400">
                Надежные автоперевозки FTL из Хэйхэ в любой город России.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">FTL доставка</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Рефрижераторы</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Автовозы</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Негабарит</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors">Хэйхэ - Москва</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Хэйхэ - СПб</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Хэйхэ - Екатеринбург</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Хэйхэ - Казань</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+86 (909) 123-45-67</li>
                <li>info@tkmetеор.ru</li>
                <li>WhatsApp 24/7</li>
                <li>Хэйхэ, КНР</li>
              </ul>
            </div>
          </div>
          
          <Separator className="mb-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 ТК МЕТЕОР. Все права защищены.</p>
            <p>Лицензия № 123456</p>
          </div>
        </div>
      </footer>

      {/* Fixed Contact Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg w-14 h-14 p-0"
        >
          <Icon name="MessageCircle" size={24} />
        </Button>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-primary rounded-full shadow-lg w-14 h-14 p-0"
        >
          <Icon name="Phone" size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Index