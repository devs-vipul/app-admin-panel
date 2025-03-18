import { CardList } from "@/components/card-list";
import PageHeader from "@/components/page-header";
import PageTabs from "@/components/page-tabs";
import React from "react";
import { TabsContent } from "@/components/ui/tabs";
// import { DetailedCardList } from "@/components/detailed-card-list";
import Searchbar from "@/components/searchbar";
import { ListFilter } from "@/components/list-filter";
import PageDataCounter from "@/components/page-data-counter";
import { CreateExerciseForm } from "@/components/create-exercise-form";
import { File, Plus } from "lucide-react";
import TableInfoSection from "@/components/table-info-section";
import { Button } from "@/components/ui/button";
import { equipmentColumns } from "@/data/equipments/columns";
import { equipmentTypes } from "@/data/equipments";
import { mechanicsColumns } from "@/data/mechanics/columns";
import { mechanicsTypes } from "@/data/mechanics";
import { forceTypeColumns } from "@/data/force-type/columns";
import { forceTypes } from "@/data/force-type";
import { exerciseTypeColumns } from "@/data/exercise-type/columns";
import { exerciseTypes } from "@/data/exercise-type";
import { experienceLevelColumns } from "@/data/experience-level/columns";
import { experienceLevelTypes } from "@/data/experience-level";
import { muscleGroupsColumns } from "@/data/muscle-groups/columns";
import { muscleGroupsData } from "@/data/muscle-groups";

const ExercisesPage = () => {
  const tabList = [
    {
      label: "Exercise List",
      value: "exercise_list",
    },
    {
      label: "Create Exercise",
      value: "create_exercise",
    },
    {
      label: "Muscle Groups",
      value: "muscle_groups",
    },
    {
      label: "Equipments",
      value: "equipments",
    },
    {
      label: "Mechanics",
      value: "mechanics",
    },
    {
      label: "Exercise Type",
      value: "exercise_type",
    },
    {
      label: "Force Type",
      value: "force_type",
    },
    {
      label: "Experience Level",
      value: "experience_level",
    },
  ];

  const exerciseListData = [
    {
      title: "Hammer curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Concentration curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Incline bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Reverse curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Alternating bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Wide Hands Push-Up",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Hammer curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Concentration curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Incline bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Reverse curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Alternating bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Wide Hands Push-Up",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Hammer curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Concentration curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Incline bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Reverse curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Alternating bicep curls",
      image: "/images/exercise-card-image.png",
    },
    {
      title: "Wide Hands Push-Up",
      image: "/images/exercise-card-image.png",
    },
  ];
  return (
    <section>
      <PageHeader title={"Exercise Library"} />
      <PageTabs tabs={tabList}>
        <TabsContent value="exercise_list">
          <div className="flex flex-row items-center justify-start gap-4">
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Search exercises...",
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
          <PageDataCounter title="Exercises" count={45} />
          <CardList listData={exerciseListData} />
        </TabsContent>
        <TabsContent value="create_exercise">
          <CreateExerciseForm />
        </TabsContent>
        <TabsContent value="muscle_groups">
          <div className="flex flex-row items-start justify-start gap-4 py-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-white px-4">Muscle Name</div>
              <Searchbar
                className="p-4"
                inputProps={{
                  placeholder: "Enter Muscle name",
                  className:
                    "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-white px-4">
                Upload Target Muscle
              </div>
              <Button
                className="m-4 bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
                type="submit"
              >
                <span>
                  <File className="w-2 h-2" />
                </span>
                Upload Target Muscle
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-white px-4">
                Upload Muscle Thumbnail
              </div>
              <Button
                className="m-4 bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
                type="submit"
              >
                {" "}
                <span>
                  <File className="w-2 h-2" />
                </span>
                Upload Muscle Thumbnail
              </Button>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start border-b border-b-white pb-4">
            <Button
              className="m-4 bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
              type="submit"
            >
              {" "}
              <span>
                <Plus className="w-2 h-2" />
              </span>
              Add
            </Button>
          </div>
          <TableInfoSection
            tableTitle="Muscle Group List"
            columns={muscleGroupsColumns}
            data={muscleGroupsData}
          />
        </TabsContent>
        <TabsContent value="equipments">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Equipment</h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Equipment Name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Choose Equipment Image",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <File className="w-2 h-2" />,
              }}
            />
            <Button
              className="ml-4 bg-[#F2D679] text-black hover:bg-[#F2D679]/90"
              type="submit"
            >
              {" "}
              <span>
                <Plus className="w-2 h-2" />
              </span>
              Add
            </Button>
          </div>
          <TableInfoSection
            tableTitle="Equipments List"
            columns={equipmentColumns}
            data={equipmentTypes}
          />
        </TabsContent>
        <TabsContent value="exercise_type">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Exercise Types</h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Exercise Type name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Add",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <Plus className="w-2 h-2" />,
              }}
            />
          </div>
          <TableInfoSection
            columns={exerciseTypeColumns}
            data={exerciseTypes}
            tableTitle={"Exercise Type List"}
          />
        </TabsContent>
        <TabsContent value="mechanics">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Mechanics</h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Mechanics name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Add",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <Plus className="w-2 h-2" />,
              }}
            />
          </div>
          <TableInfoSection
            columns={mechanicsColumns}
            data={mechanicsTypes}
            tableTitle={"Mechanics Type List"}
          />
        </TabsContent>
        <TabsContent value="force_type">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Force Types</h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Force Type name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Add",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <Plus className="w-2 h-2" />,
              }}
            />
          </div>
          <TableInfoSection
            columns={forceTypeColumns}
            data={forceTypes}
            tableTitle={"Force Type List"}
          />
        </TabsContent>
        <TabsContent value="experience_level">
          <div className="flex flex-col items-start justify-start gap-4 border-b border-b-white py-4">
            <h3 className="text-sm text-white px-4">Add Experience Level</h3>
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Enter Experience Level name",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Add",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
                icon: <Plus className="w-2 h-2" />,
              }}
            />
          </div>
          <TableInfoSection
            columns={experienceLevelColumns}
            data={experienceLevelTypes}
            tableTitle={"Experience Level List"}
          />
        </TabsContent>
      </PageTabs>
    </section>
  );
};

export default ExercisesPage;
