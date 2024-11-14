import Aboutme from '@/components/Aboutme';
import Contactme from '@/components/Contactme';
import MyHome from '@/components/MyHome';
import Projects from '@/components/Projects';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<MyHome />
			<Aboutme />
			<Projects />
			<Contactme />
		</div>
	);
}
