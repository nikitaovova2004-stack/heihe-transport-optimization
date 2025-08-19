import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="text-3xl font-bold text-primary mx-0 rounded-none bg-slate-50">METEOR</div>
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
  )
}

export default Header