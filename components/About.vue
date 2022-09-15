<template>
  <!-- ======= About Section ======= -->
  <section id="about" class="about-mf sect-pt4 route">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="box-shadow-full">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-sm-6 col-md-5">
                    <div class="about-img">
                      <img
                        src="assets/img/wujw.jpg"
                        class="img-fluid rounded b-shadow-a"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-7">
                    <div class="about-info">
                      <p v-for="item in personalList" :key="item.label">
                        <span class="title-s"
                          >{{ $t(`personal.${item.label}`) }}:
                        </span>
                        <span>{{ $t(item.value) }}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="skill-mf">
                  <p class="title-s">Skill</p>
                  <template v-for="item in skills" :key="item.name">
                    <span>{{ item.name + " " }}</span>
                    <span class="pull-right">{{ item.value }}%</span>
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="`width: ${item.value}%`"
                        :aria-valuenow="item.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </template>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me pt-4 pt-md-0">
                  <div class="title-box-2">
                    <h5 class="title-left">{{ $t("aboutMe") }}</h5>
                  </div>
                  <p class="lead">
                    Jinwen Wu, graduated from Hefei University of Technology
                    with a major in Computer and Science, now a front-end
                    developer.
                  </p>
                  <p class="lead">
                    A solid foundation in JavaScript, proficient in the use of
                    the
                    <a
                      style="color: green"
                      href="https://vuejs.org/"
                      target="'_blank'"
                      >Vue</a
                    >
                    series technology stack, and completed more than 20 project
                    development from zero to one.
                  </p>
                  <li
                    class="lead"
                    v-for="(item, index) in $t('skills')"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->
</template>

<script lang="ts" setup>
const personalList = [
  {
    label: "Name",
    value: "Jinwen Wu",
  },
  {
    label: "Profile",
    value: "Front-end Developer",
  },
  {
    label: "Email",
    value: "1844287682@qq.com",
  },
  {
    label: "WeChat",
    value: "wjwlhzforever",
  },
];

const skills = [
  {
    name: "JavaScript",
    value: 85,
  },
  {
    name: "CSS",
    value: 75,
  },
  {
    name: "HTML",
    value: 75,
  },
  {
    name: "Vue",
    value: 90,
  },
  {
    name: "Angular",
    value: 70,
  },
  {
    name: "React",
    value: 60,
  },
];

</script>

<style scoped lang="scss"></style>
