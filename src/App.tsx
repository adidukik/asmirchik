import { ScrollShadow } from '@nextui-org/react';
import { Content } from './Content';
import { Button } from '@nextui-org/react';

export default function App() {
  return (
    <div className='mx-32'>
      <div>
        <ScrollShadow className='w-[300px] h-16'>
          <Content />
        </ScrollShadow>
      </div>
      <Button color='primary' className='w-full'>
        Button
      </Button>
    </div>
  );
}
