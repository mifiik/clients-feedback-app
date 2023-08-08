import layoutStyle from './styles.module.css';
import childFoto from '../images/boy.webp';
import heartIcon from '../images/heartIcon.webp';
import Form from '../Form';
import pinkIcon from '../images/pinkIcon.webp';

function Layuot() {
	return (
		<div className={layoutStyle.main}>
			<div className={layoutStyle.image}>
				<img src={childFoto} alt="childFoto" />
				<div className={layoutStyle.imageBlock} />
				<div className={layoutStyle.imagePinkIcon}>
					<img src={pinkIcon} alt="PinkIcon" />
				</div>
			</div>
			<div className={layoutStyle.form}>
				<div className={layoutStyle.formHeader}>
					<div className={layoutStyle.formTitle}>
						<div className={layoutStyle.formTitleImg}>
							<img src={heartIcon} alt="heartIcon" />
						</div>
						<h2>Свяжитесь с нами</h2>
					</div>
					<p>Отправьте нам сообщение и мы ответим в ближайшее время</p>
				</div>
				<Form />
			</div>
		</div>
	);
}

export default Layuot;
