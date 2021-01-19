import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/features/Home/Home";
import Works from "./components/features/Works/Works";
import About from "./components/features/About/About";
import Contact from "./components/features/Contact/Contact";

/* Collections Here */
import Colossus from "./components/features/Works/Collections/Colossus/Colossus";
import Hats from "./components/features/Works/Collections/Hats/Hats";
import Odyssey from "./components/features/Works/Collections/Odyssey/Odyssey";
import MariaMolle from "./components/features/Works/Collections/The_Last_Day_of_Maria_Molle/MariaMolle";
import FewObjectsComposition from "./components/features/Works/Collections/Few_Objects_Composition/FewObjectsComposition";
import Reserve from "./components/features/Works/Collections/Reserve/Reserve";
import SomeSkeletonVariation from "./components/features/Works/Collections/Some_Skeleton_Variation/SomeSkeletonVariation";
import PunchAndCrack from "./components/features/Works/Collections/Punch_And_Crack/PunchAndCrack";
import HowTheyHoldOn from "./components/features/Works/Collections/How_They_Hold_On/HowTheyHoldOn";
import TwoCirclesAndOneSkeleton from "./components/features/Works/Collections/Two_Circles_And_One_Skeleton/TwoCirclesAndOneSkeleton";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    { path: "", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/works", component: Works },
    { path: "/works/colossus", component: Colossus },
    { path: "/works/hats", component: Hats },
    { path: "/works/odyssey", component: Odyssey },
    { path: "/works/maria-molle", component: MariaMolle },
    {
      path: "/works/few-objects-composition",
      component: FewObjectsComposition,
    },
    { path: "/works/reserve", component: Reserve },
    {
      path: "/works/some-skeleton-variation",
      component: SomeSkeletonVariation,
    },
    { path: "/works/punch-and-crack", component: PunchAndCrack },
    { path: "/works/how-they-hold-on", component: HowTheyHoldOn },
    {
      path: "/works/two-circles-and-one-skeleton",
      component: TwoCirclesAndOneSkeleton,
    },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "**", redirect: "/home" },
    { path: "*", redirect: "/home" },
    { path: "", redirect: "/home" },
  ],
});

export default router;
