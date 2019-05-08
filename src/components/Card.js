import React from 'react';
import logo from '../images/jigsaw_logo.svg';
import logo_adalab from '../images/logo-adalab.png';
import '../App.scss';
import Footer from './Footer';

class Card extends React.Component {
    render(){
        const url = "url ('data:image/png/jpg/svg/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMxmZmZycnKMjIx/f3+ysrKZmZm/v7+lpaXuFo5qAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVR4nO2Wu46bQBSGwcaGkgPmUhrlBRYpD2C2SB0UbWrTJC1ESWrTJK+dcxnHdpNNYNL9n7RrDkbnmxl+8AQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAf0WYBcGGcisiyvRzQ9X1++Q5e/Nej8hxWiohVzjJRLX7etdw28PoR2KD7Z1kuE6Nj4Taj+TsWpqku04toexz/MHGQOUn5bJYYsNrTBLTbWpP/P8LHUVy/PfuD5KusuZdZuN/66bW5Xa+9CGZa2s+qySiH9YxcY319GrJpCPe0qSSkL5ZhiO62EWyeqslG2uehZkbuAXKnGI/e5Bs9Ub3uUnaMugOanNJjl9GD5JEb/RQmKQpOMxyMNR3V66WBJrhLlXJjlLOrkytq+6uXC+RdjGdVLJnY6gPSJN6lcjCJHRRyYYzFWnLR4lxWC7pc8nQqJKJRhZW18H30jr1IZEM859KhuzhIfcnkQzzbFSi75JGmuly/ZYcF7R/kEiGh0KrmAo+3/Ka3e5J40XCyeIEa5W4dbncRdjPTLifeKTaOglnuC38SoZaVkyq0Em451zaRTtPkj7nBGvVy93gvjyLyUVp70kSZpJiqVrr3JTyqtctBF/gRxKRvHKlauyt2GoGnvS49yRJSJpztXN7rlkzrMK48SThzUOl1d5tKibJ8Kw/jV/tYXS7lfNyCe9UTlpFbg8RSb2lw8/gI+XD7bVC6R+6vSZppTlXk7vZmig+q/u52ZNEf6a4mt3vumaYVUwZTOskr/H9OXs3+m8LAAAAAAAAAAAAAAAAAAAAAAAAAPBf+AW+NlaG5H+ROgAAAABJRU5ErkJggg==')";

        const mainContent = (
            <div class="page">
                <header class="header__container">
                    <h1 class="header">
                        <img src="assets/images/jigsaw_logo.svg" alt="page logo" class="header__logo" />
                    </h1>
                </header>
                <main class="main__container">
                    <section class="main__form">
                        <form action="" method="post">
                            <fieldset class="design__container form__collapsible jscontainer">
                                <legend>Diseña</legend>
                                <div class="design__title__container">
                                    <div class="first__title"> 
                                        <i class="far fa-object-ungroup icon__collapsible"></i>
                                        <h2 class="collapsible__title">Diseña</h2>
                                    </div>
                                    <div class="second__title design__collapsible">
                                        <i class="fas fa-chevron-down arrow__collapsible"></i>
                                    </div>
                                </div>
                                <div class="design__main__container collapsible__container">
                                    <div class="title__color__container">
                                        <p class="color__title">Colores</p>
                                    </div>
                                    <div class="palettes">
                                        <label class="palettes__label" for="color1">
                                            <input value="1" type="radio" id="color1" name="color" checked />
                                            <ul class="theme">
                                                <li class="theme__color" style={{backgroundColor:'#114e4e'}}>114e4e</li>
                                                <li class="theme__color" style={{backgroundColor:'#438792'}}>438792</li>
                                                <li class="theme__color" style={{backgroundColor:'#a2deaf'}}>a2deaf</li>
                                            </ul>
                                        </label>
                                        <label class="palettes__label" for="color2">
                                            <input value="2" type="radio" id="color2" name="color" />
                                            <ul class="theme">
                                                <li class="theme__color" style={{backgroundColor:'#420101'}}>420101</li>
                                                <li class="theme__color" style={{backgroundColor:'#bd1010'}}>bd1010</li>
                                                <li class="theme__color" style={{backgroundColor:'#e95626'}}>e95626</li>
                                            </ul>
                                        </label>
                                        <label class="palettes__label" for="color3">
                                            <input value="3" type="radio" id="color3" name="color" />
                                            <ul class="theme">
                                                <li class="theme__color" style={{backgroundColor:'#3e5b65'}}>3e5b65</li>
                                                <li class="theme__color" style={{backgroundColor:'#dfe5eb'}}>dfe5eb</li>
                                                <li class="theme__color" style={{backgroundColor:'#a0c0cf'}}>a0c0cf</li>
                                            </ul>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="fill__container form__collapsible jscontainer hidden__collapsible">
                                <legend>Rellena</legend>
                                <div class="design__title__container">
                                    <div class="first__title">
                                        <i class="far fa-keyboard icon__collapsible"></i>
                                        <h2 class="collapsible__title">Rellena</h2>
                                    </div>
                                    <div class="second__title fill__collapsible">
                                        <i class="fas fa-chevron-down arrow__collapsible"></i>
                                    </div>
                                </div>
                                <div class="fill__container__section collapsible__container">
                                    <small class="legend">Los campos indicados con <span class="legend_plus">*</span> son obligatorios.</small>
                                    <div class="fill__main__container">
                                        <label class="label__fill" for="name">Nombre completo <span class="legend_plus">*</span>    
                                        </label>
                                        <input class="input__fill input__name" type="text" name="name" id="name"
                                        placeholder="Ej: Silly Sally" required/>

                                        <label class="label__fill" for="job">Puesto <span class="legend_plus">*</span>
                                        </label>
                                        <input class="input__fill input__job" type="text" name="job" id="job"
                                        placeholder="Ej: Front-end unicorn" required />

                                        <label class="label__fill" for="profile_image">Imagen de perfil <span class="legend_plus">*</span>
                                        </label>
                                        <div class="thumbnail__container">
                                            <label for="avatar"></label>
                                            <button class="action__upload-btn js__profile-trigger" type="button">Añadir imagen</button>
                                            <input type="file" name="photo" id="img-selector"
                                            class="action__hiddenField js__profile-upload-btn" required />
                                            <div class="profile__preview js__profile-preview"></div>
                                        </div>

                                        <label class="label__fill" for="email">Email <span class="legend_plus">*</span>
                                        </label>
                                        <input class="input__fill input__email" type="email" name="email" id="email"
                                        placeholder="Ej: sally-hill@gmail.com" required />

                                        <label class="label__fill" for="tel">Teléfono</label>
                                        <input class="input__fill  input__tel" type="tel" name="phone"
                                        id="tel" maxlength="15" placeholder="Ej: 555 555 555" required />
                                        
                                        <label class="label__fill" for="linkedin">Linkedin <span class="legend_plus">*</span></label>
                                        <input class="input__fill input__linkedin ellipsis" type="text" name="linkedin"
                                        id="linkedin" placeholder="Ej: sally.hill" required />

                                        <label class="label__fill" for="github">Github <span class="legend_plus">*</span>
                                        </label>
                                        <input class="input__fill input__github ellipsis" type="text" name="github"
                                        id="github" placeholder="Ej: sally-hill" required />
                                     </div>
                                </div>
                            </fieldset>
                            
                            <fieldset class="share__container form__collapsible jscontainer hidden__collapsible">
                                <legend>Comparte</legend>
                                <div class="design__title__container">
                                    <div class="first__title">
                                        <i class="fas fa-share-alt icon__collapsible"></i>
                                        <h2 class="collapsible__title">Comparte</h2>
                                    </div>
                                    <div class="second__title share__collapsible">
                                    <i class="fas fa-chevron-down arrow__collapsible"></i>
                                    </div>
                                </div>
                                <div class="container__button collapsible__container">
                                    <button class="share__button" type="submit">
                                        <i class="far fa-address-card share__icon"></i>Crear tarjeta
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                        <div class="twitter__container hidden">
                            <h2 class="twitter__container--text">La tarjeta ha sido creada</h2>
                            <a href="" class="twitter__container--link"></a>
                            <button class="twitter__container--btn">
                                <i class="fab fa-twitter twitter__icon"></i> Compartir en twitter
                            </button>
                        </div>
                    </section>
                    {/* Empieza la sección de la preview */}
                    <section class="main__preview">
                        <div class="preview__wrapper">
                            <div class="photo__container">
                                <button class="btn__reset">
                                    <i class="trash__icon far fa-trash-alt"></i>Reset
                                </button>
                                <div class="card__header">
                                    <div class="side__bar"></div>
                                    <div class="full__name">
                                        <h3 class="preview__title">Nombre Apellido</h3>
                                        <h4 class="preview__subtitle">Front-end Developer</h4>
                                    </div>
                                </div>
                                <div class="profile">
                                    <div class="preview__photo profile__image js__profile-image" style={{backgroundImage:url}}>
                                        <img src='data:image/png/jpg/svg/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIBAMAAABfdrOtAAAAG1BMVEXMzMxmZmZycnKMjIx/f3+ysrKZmZm/v7+lpaXuFo5qAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACWUlEQVR4nO2Wu46bQBSGwcaGkgPmUhrlBRYpD2C2SB0UbWrTJC1ESWrTJK+dcxnHdpNNYNL9n7RrDkbnmxl+8AQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAf0WYBcGGcisiyvRzQ9X1++Q5e/Nej8hxWiohVzjJRLX7etdw28PoR2KD7Z1kuE6Nj4Taj+TsWpqku04toexz/MHGQOUn5bJYYsNrTBLTbWpP/P8LHUVy/PfuD5KusuZdZuN/66bW5Xa+9CGZa2s+qySiH9YxcY319GrJpCPe0qSSkL5ZhiO62EWyeqslG2uehZkbuAXKnGI/e5Bs9Ub3uUnaMugOanNJjl9GD5JEb/RQmKQpOMxyMNR3V66WBJrhLlXJjlLOrkytq+6uXC+RdjGdVLJnY6gPSJN6lcjCJHRRyYYzFWnLR4lxWC7pc8nQqJKJRhZW18H30jr1IZEM859KhuzhIfcnkQzzbFSi75JGmuly/ZYcF7R/kEiGh0KrmAo+3/Ka3e5J40XCyeIEa5W4dbncRdjPTLifeKTaOglnuC38SoZaVkyq0Em451zaRTtPkj7nBGvVy93gvjyLyUVp70kSZpJiqVrr3JTyqtctBF/gRxKRvHKlauyt2GoGnvS49yRJSJpztXN7rlkzrMK48SThzUOl1d5tKibJ8Kw/jV/tYXS7lfNyCe9UTlpFbg8RSb2lw8/gI+XD7bVC6R+6vSZppTlXk7vZmig+q/u52ZNEf6a4mt3vumaYVUwZTOskr/H9OXs3+m8LAAAAAAAAAAAAAAAAAAAAAAAAAPBf+AW+NlaG5H+ROgAAAABJRU5ErkJggg=='
                                        alt="Foto del usuario" class="photo" />
                                    </div>
                                </div>
                                <ul class="list__rs">
                                    <li class="reset__list preview__email hidden">
                                        <a class="rs__element rs__email" href="mailto:">
                                            <i class="icon far fa-envelope"></i>
                                        </a>
                                    </li>
                                    <li class="reset__list preview__tel hidden">
                                        <a class="rs__element rs__tel" href="tel:">
                                            <i class="icon fas fa-mobile-alt"></i>
                                        </a>
                                    </li>
                                    <li class="reset__list preview__linkedin hidden">
                                        <a class="rs__element link__linkedin" href="" target="_blank">
                                            <i class="icon fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li class="reset__list preview__github hidden">
                                        <a class="rs__element link__github" href="" target="_blank">
                                            <i class="icon fab fa-github-alt"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <div class="footer__page">
                        <p class="footer__copyright">Awesome profile-cards @2019</p>
                        <a href="https://adalab.es/" target="_blank">
                            <img src="assets/images/logo-adalab.png" alt="logo de adalab" class="footer__image" />
                        </a>
                    </div>
                </footer>
            </div>
        );
        return mainContent;
    }
}

export default Card;