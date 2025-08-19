import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Icon from '@/components/ui/icon'

const Footer = () => {
  return (
    <>
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
    </>
  )
}

export default Footer