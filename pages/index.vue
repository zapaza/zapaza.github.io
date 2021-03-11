<template>
  <div class="wrapper">
    <CSections is-blue>
      <div class="about">
        <UISpacer margin-right="rem4">
          <div class="about__text">
            <UISpacer margin="rem2">
              <UIText tag="h1" has-size="rem8" has-weight="bold">
                Hey, I'm Stas a layout designer.
              </UIText>
            </UISpacer>
            <UISpacer margin="rem2">
              <UIText tag="p" has-size="rem3"> I have been doing layout for 4 years.</UIText>
              <UIText tag="p" has-size="rem3">
                During this time, I made about 80 projects of different complexity and themes.
              </UIText>
              <UIText tag="p" has-size="rem3">
                I led a team of 2 designers and 5 layout designers.
              </UIText>
              <UIText tag="p" has-size="rem3">Conducted courses on site layout.</UIText>
            </UISpacer>
            <ul class="about__socials">
              <li class="about__socials-item">
                <a href="" target="_blank" class="about__socials-link">
                  <UIIcon name="Vk" />
                </a>
              </li>
              <li class="about__socials-item">
                <a href="" target="_blank" class="about__socials-link">
                  <UIIcon name="Instagram" />
                </a>
              </li>
              <li class="about__socials-item">
                <a href="" target="_blank" class="about__socials-link">
                  <UIIcon name="Telegram" />
                </a>
              </li>
              <li class="about__socials-item">
                <a href="" target="_blank" class="about__socials-link">
                  <UIIcon name="Github" />
                </a>
              </li>
            </ul>
          </div>
        </UISpacer>
        <div class="about__image">
          <img src="~/assets/images/itsMe.png" alt="it's me" title="it's me" />
        </div>
      </div>
    </CSections>

    <CSections is-orange>
      <div class="skills">
        <UISpacer margin="rem4">
          <UIText tag="h2" has-size="rem6" has-weight="bold"> My skills</UIText>
        </UISpacer>
        <div class="skills__list">
          <div class="skills__item">
            <UIIcon size="128" name="html5" title="HTML5"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="jquery" title="Jquery"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="vue" title="VueJS"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="css3" title="CSS3"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="less" title="Less"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="sass" title="Sass"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="postcss" title="PostCSS"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="git" title="Git"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="gulp" title="Gulp"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="webpack" title="Webpack"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="figma" title="Figma"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="adobephotoshop" title="PS"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="adobeillustrator" title="AI"></UIIcon>
          </div>
          <div class="skills__item">
            <UIIcon size="128" name="adobeaftereffects" title="AE"></UIIcon>
          </div>
        </div>
      </div>
    </CSections>
  </div>
</template>
<script>
import CSections from '~/components/sections/CSections.vue';
import UIText from '~/components/ui/UIText.vue';
import UISpacer from '~/components/ui/UISpacer.vue';
import UIIcon from '~/components/ui/icons/UIIcon.vue';

export default {
  components: { UIIcon, UISpacer, UIText, CSections },
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/home', {
        version: 'draft',
      })
      .then(res => {
        return res.data;
      })
      .catch(res => {
        if (!res.response) {
          console.error(res);
          context.error({ statusCode: 404, message: 'Failed to receive content form api' });
        } else {
          console.error(res.response.data);
          context.error({ statusCode: res.response.status, message: res.response.data });
        }
      });
  },
  mounted() {
    // Load the JSON from the API
    this.$storybridge.on(['input', 'published', 'change'], event => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else {
        window.location.reload();
      }
    });
  },
};
</script>

<style lang="css">
.about {
  display: flex;
  align-items: flex-start;

  &__image {
    display: block;
    width: 35%;
    flex-shrink: 0;

    img {
      display: block;
      width: 100%;
    }
  }

  &__socials {
    padding: 0;
    margin: 4rem 0 0;
    list-style: none;
    display: flex;
  }

  &__socials-item {
    margin-right: 3rem;
  }

  &__socials-link {
    color: var(--typo-color-primary);
    text-decoration: none;
    display: block;
    transition: 0.2s color ease-in-out;

    &:hover {
      color: var(--functional-pink);
    }
  }
}

.skills {
  &__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 -3rem;
  }

  &__item {
    margin: 0 3rem 4rem;
    flex-basis: calc(20% - 6rem);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
