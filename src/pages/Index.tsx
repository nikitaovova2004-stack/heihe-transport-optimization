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
    { value: 'tent', label: 'Тент', capacity: '82-120 м³, 20-22 т' },
    { value: 'ref', label: 'Рефрижератор', capacity: '86 м³, -20°C ... +25°C' },
    { value: 'carrier', label: 'Автовоз', capacity: '8-10 легковых' },
    { value: 'tral', label: 'Трал', capacity: '60 т, низкорамный' }
  ]

  const routes = [
    { from: 'Хэйхэ', to: 'Москва', duration: '8 дней', price: '220 000' },
    { from: 'Хэйхэ', to: 'Казань', duration: '9 дней', price: '195 000' },
    { from: 'Хэйхэ', to: 'Екатеринбург', duration: '7 дней', price: '185 000' },
    { from: 'Хэйхэ', to: 'Новосибирск', duration: '6 дней', price: '165 000' },
    { from: 'Хэйхэ', to: 'СПб', duration: '10 дней', price: '245 000' },
    { from: 'Хэйхэ', to: 'Челябинск', duration: '8 дней', price: '175 000' }
  ]

  const services = [
    { icon: 'Truck', title: 'Доставка FTL/LTL', desc: 'Полные и сборные грузы' },
    { icon: 'FileText', title: 'Таможенное оформление', desc: 'HS-коды, декларации' },
    { icon: 'Package', title: 'Консолидация', desc: 'Склад 5000 м² в Хэйхэ' },
    { icon: 'Shield', title: 'Страхование CMR', desc: 'До 3 млн ¥' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Truck" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TK МЕТЕОР</h1>
                <p className="text-sm text-gray-500">Автоперевозки FTL из Хэйхэ</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#routes" className="text-gray-600 hover:text-primary transition-colors">Маршруты</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/img/2636722d-85a6-45c9-a6f5-f7248056a486.jpg)` }}
        >
          <div className="absolute inset-0 bg-gray-900/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            FTL-перевозки из <br />
            <span className="text-primary">Хэйхэ в Россию</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Тент, реф, автовоз, трал — 7–12 дней. <br />
            Фиксированная ставка, собственный парк 180 машин
          </p>
          
          {/* Calculator Card */}
          <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-gray-900 text-center">
                <Icon name="Calculator" size={24} className="mx-auto mb-2" />
                Калькулятор FTL
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Вес (тонн)</label>
                  <Input 
                    placeholder="20"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Объём (м³)</label>
                  <Input 
                    placeholder="82"
                    value={volume}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип кузова</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {truckTypes.map((type) => (
                    <Button
                      key={type.value}
                      variant={truckType === type.value ? "default" : "outline"}
                      size="sm"
                      onClick={() => setTruckType(type.value)}
                      className="text-xs"
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Город назначения</label>
                <Input 
                  placeholder="Москва"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              
              {calculatedPrice && (
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-800">
                      {calculatedPrice.toLocaleString()} ₽
                    </p>
                    <p className="text-sm text-green-600">Стоимость доставки</p>
                    <p className="text-xs text-green-500 mt-1">Срок: 7-12 дней</p>
                  </div>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 gap-3">
                <Button onClick={calculatePrice} className="w-full">
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" className="w-full text-green-600 border-green-200">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  КП в WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Парк техники</h3>
            <p className="text-xl text-gray-600">Собственный парк 180 единиц специализированного транспорта</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {truckTypes.map((truck, index) => (
              <Card key={truck.value} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Truck" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{truck.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{truck.capacity}</p>
                  <Badge variant="secondary" className="mb-4">
                    {index + 1}0+ единиц
                  </Badge>
                  <Button variant="outline" size="sm" className="w-full">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="routes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Популярные маршруты</h3>
            <p className="text-xl text-gray-600">Регулярные рейсы из Хэйхэ в крупнейшие города России</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span className="text-gray-600">{route.from}</span>
                      <Icon name="ArrowRight" size={16} className="text-gray-400" />
                      <span className="font-semibold text-gray-900">{route.to}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Срок доставки</p>
                      <p className="font-semibold text-gray-900">{route.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">от</p>
                      <p className="text-xl font-bold text-primary">{route.price} ₽</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Услуги под ключ</h3>
            <p className="text-xl text-gray-600">Полный цикл логистических услуг для вашего бизнеса</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">О компании</h3>
              <p className="text-xl text-gray-600 mb-8">
                ТК МЕТЕОР — ведущий оператор международных автоперевозок между Китаем и Россией. 
                Специализируемся на FTL доставке из Хэйхэ с собственным парком и складской базой.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">180</div>
                  <div className="text-gray-600">единиц техники</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">12</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4300</div>
                  <div className="text-gray-600">рейсов/год</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5000</div>
                  <div className="text-gray-600">м² склада</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Членство в СРО логистических компаний</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Партнерство с China Railway Express</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-500" />
                  <span className="text-gray-700">Лицензия на международные перевозки</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/img/be6739ab-923c-4fd5-a4b5-51cecaeced14.jpg" 
                alt="Парк техники ТК Метеор" 
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.8★</div>
                    <div className="text-sm text-gray-600">180+ отзывов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">Контакты</h3>
              <p className="text-xl text-gray-300 mb-8">
                Получите консультацию и рассчитайте стоимость доставки прямо сейчас
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Офис в Хэйхэ</div>
                    <div className="text-gray-300">ул. Центральная, 123, Хэйхэ, КНР</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон в Хэйхэе</div>
                    <div className="text-gray-300">+86 (909) 123-45-67</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Icon name="MessageCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp 24/7</div>
                    <div className="text-gray-300">Русскоязычный менеджер</div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-8 bg-gray-700" />
              
              <div className="flex space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Онлайн-чат 24/7</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-700 rounded-lg p-4 mb-4 text-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <span className="text-gray-300">Менеджер Анна</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-200">
                    Добро пожаловать! Готов рассчитать стоимость доставки вашего груза из Хэйхэ. 
                    Укажите параметры груза и город назначения.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <Input placeholder="Ваше сообщение..." className="bg-gray-700 border-gray-600 text-white" />
                  <Button className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Truck" size={24} className="text-primary" />
                <span className="text-xl font-bold text-white">TK МЕТЕОР</span>
              </div>
              <p className="text-sm">
                Надежные автоперевозки FTL из Хэйхэ в любой город России. 
                Собственный парк, фиксированные тарифы, доставка точно в срок.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>FTL доставка</li>
                <li>Рефрижераторные перевозки</li>
                <li>Автовозы</li>
                <li>Негабаритные грузы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-sm">
                <li>Хэйхэ - Москва</li>
                <li>Хэйхэ - СПб</li>
                <li>Хэйхэ - Екатеринбург</li>
                <li>Хэйхэ - Казань</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+86 (909) 123-45-67</li>
                <li>info@tkmetеor.ru</li>
                <li>WhatsApp 24/7</li>
                <li>Хэйхэ, КНР</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2025 ТК МЕТЕОР. Все права защищены.</p>
            <p>Лицензия на международные перевозки № 123456</p>
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg">
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Index