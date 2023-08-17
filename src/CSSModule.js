import styles from './CSSModule.module.scss';

const CSSModule = () => {
   return (
      <div className={`${styles.wrapper}${styles.inverted}`}>
         안녕하세요, 저는 <span className="something">CSSModule</span>입니다~!
      </div>
   );
};

export default CSSModule;
