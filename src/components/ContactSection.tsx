import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'

const ContactSection = () => {
  return (
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
  )
}

export default ContactSection