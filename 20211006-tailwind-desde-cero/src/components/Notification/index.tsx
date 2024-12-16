import Bubble from '@/components/icons/Bubble';

export default function Notification() {
  <div className="flex max-w-sm mx-auto p-6 rounded-lg bg-white shadow-xl items-center">
    <div className="flex-shrink-0">
      <picture className="w-12 h-12">
        <Bubble />
      </picture>
    </div>
    <div className="ml-6 pt-1">
      <h4 className="text-gray-900 text-xl">ChitChat</h4>
      <p className="text-gray-500 text-base">You have a new message!</p>
    </div>
  </div>;
}
