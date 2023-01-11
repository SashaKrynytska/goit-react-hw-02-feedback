import PropTypes from 'prop-types';
import css from './Section.module.css';

// const Section = ({ title, children }) => (
//   <div className="SectionItem">
//     <h2>{title}</h2>
//     {children}
//   </div>
// );

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;
