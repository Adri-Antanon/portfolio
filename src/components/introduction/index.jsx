import { useLanguage } from '../../hooks/useLanguage';
import { information } from '../../i18n';

import styles from './styles.module.css';

export const Intro = () => {
  const { state } = useLanguage();
  const { intro, name, role } = information[state.language].about;

  return (
    <div className={`centered ${styles.about}`}>
      {name && (
        <h1>
          {intro} <span className={styles.about__name}>{name}</span>{' '}
          <span role={'img'}>👋</span>
        </h1>
      )}

      {role && <h2 className={styles.about__role}>{role}</h2>}
    </div>
  );
};
