import formStyle from './styles.module.css';
import buttonIcon from '../images/buttonIcon.webp';

function Form() {
	return (
		<div className={formStyle.container}>
			<form className={formStyle.formBlock}>
				<div className={formStyle.formInputs}>
					<input type="text" placeholder="Ваше имя*" />
					<input type="text" placeholder="Телефон" />
					<input type="email" placeholder="Электронная почта*" />
					<textarea name="" id="" placeholder="Текст сообщения*" />
				</div>
				<div className={formStyle.checkbox}>
					<p>*обязательные поля</p>
					<input type="checkbox" name="checkbox" id="" />
					<span>
						Я согласен(-на) с
						{' '}
						<strong>правилами</strong>
						{' '}
						о обработке моих персональных данных
					</span>
				</div>
				<button className={formStyle.button} type="submit">
					<img className={formStyle.buttonImg} src={buttonIcon} alt="buttonIcon" />
					<span>Отправить сообщение</span>
				</button>
			</form>
		</div>
	);
}

export default Form;
