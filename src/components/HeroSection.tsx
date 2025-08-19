import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'

const HeroSection = () => {
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

  return (
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
  )
}

export default HeroSection