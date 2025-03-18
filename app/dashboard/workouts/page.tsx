import { CreateWorkoutForm } from "@/components/create-workout-form";
import { ListFilter } from "@/components/list-filter";
import PageDataCounter from "@/components/page-data-counter";
import PageHeader from "@/components/page-header";
import PageTabs from "@/components/page-tabs";
import Searchbar from "@/components/searchbar";
import { TabsContent } from "@/components/ui/tabs";
import { WorkoutDetailedCardList } from "@/components/workout-detailed-card-list";

const WorkoutsPage = () => {
  const tabList = [
    {
      label: "Public Workout",
      value: "public_workout",
    },
    {
      label: "Private Workout",
      value: "private_workout",
    },
    {
      label: "Create Workout",
      value: "create_workout",
    },
  ];

  const workouts = [
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
    {
      title: "Total body & Cardio (gym) ",
      description:
        "Four rounds of five exercises. One minute of workout, no rest between exercises. 45 seconds of recovery betwee...",
      goal: "Strength",
      level: "Beginner",
      duration: "6 Weeks",
      image: "/images/recipe-image.png",
    },
  ];

  return (
    <section>
      <PageHeader title={"Recipes"} />
      <PageTabs tabs={tabList}>
        <TabsContent value="public_workout">
          <div className="flex flex-row items-center justify-start gap-4">
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Search",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Go",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
              }}
            />
            <ListFilter />
          </div>
          <PageDataCounter title="Workouts" count={2399} />
          <WorkoutDetailedCardList data={workouts} />
        </TabsContent>
        <TabsContent value="private_workout">
          <div className="flex flex-row items-center justify-start gap-4">
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Search",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Go",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
              }}
            />
            <ListFilter />
          </div>
          <PageDataCounter title="Workouts" count={120} />
          <WorkoutDetailedCardList data={workouts} />
        </TabsContent>
        <TabsContent value="create_workout">
          <h3 className="text-sm text-white px-4">Workout Information</h3>
          <CreateWorkoutForm />
        </TabsContent>
      </PageTabs>
    </section>
  );
};

export default WorkoutsPage;
