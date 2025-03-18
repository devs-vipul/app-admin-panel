import React, { useState } from "react";
import { useFormikContext } from "formik";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  RecipeFormValues,
  Ingredient,
  Unit,
  units,
} from "../create-recipe-form";
import { Plus, GripVertical, X } from "lucide-react";

// Predefined ingredients for the modal
const predefinedIngredients = [
  "Butter",
  "Milk",
  "Banana",
  "Salt",
  "Sugar",
  "Flour",
  "Eggs",
  "Vanilla Extract",
  "Baking Powder",
  "Cinnamon",
  "Chocolate Chips",
  "Oil",
];

export const RecipeIngredients: React.FC = () => {
  const { values, setFieldValue } = useFormikContext<RecipeFormValues>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const filteredIngredients = predefinedIngredients.filter((ing) =>
    ing.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addIngredients = () => {
    const newIngredients = selectedIngredients.map((name) => ({
      id: crypto.randomUUID(),
      name,
      quantity: 0,
      unit: "g" as Unit,
    }));

    setFieldValue("ingredients", [...values.ingredients, ...newIngredients]);
    setSelectedIngredients([]);
  };

  const updateIngredient = (id: string, updates: Partial<Ingredient>) => {
    const newIngredients = values.ingredients.map((ing) =>
      ing.id === id ? { ...ing, ...updates } : ing
    );
    setFieldValue("ingredients", newIngredients);
  };

  const removeIngredient = (id: string) => {
    setFieldValue(
      "ingredients",
      values.ingredients.filter((ing) => ing.id !== id)
    );
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(values.ingredients);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setFieldValue("ingredients", items);
  };

  return (
    <div className="space-y-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="m-4 bg-transparent hover:bg-custom-gold/90 rounded-md border border-custom-gold text-custom-gold hover:text-black"
            type="button"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Ingredients
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-[#1C1C1C] text-white">
          <DialogHeader>
            <DialogTitle>Add Ingredients</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Search ingredients..."
              className="bg-[#2C2C2C] border-custom-gold text-white placeholder:text-zinc-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {filteredIngredients.map((ingredient) => (
                <div
                  key={ingredient}
                  className="flex items-center space-x-2 p-2 hover:bg-[#2C2C2C] rounded-md"
                >
                  <Checkbox
                    id={ingredient}
                    checked={selectedIngredients.includes(ingredient)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedIngredients([
                          ...selectedIngredients,
                          ingredient,
                        ]);
                      } else {
                        setSelectedIngredients(
                          selectedIngredients.filter(
                            (ing) => ing !== ingredient
                          )
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={ingredient}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {ingredient}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="bg-custom-gold text-black hover:bg-custom-gold/90"
            onClick={addIngredients}
            disabled={selectedIngredients.length === 0}
          >
            Add Selected Ingredients
          </Button>
        </DialogContent>
      </Dialog>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="ingredients">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {values.ingredients.map((ingredient, index) => (
                <Draggable
                  key={ingredient.id}
                  draggableId={ingredient.id}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className="flex items-center justify-between bg-[#2C2C2C] p-2 rounded-md"
                    >
                      <div className="flex items-center space-x-2 w-full justify-between">
                        <div {...provided.dragHandleProps}>
                          <GripVertical className="w-4 h-4 text-custom-gold cursor-move" />
                        </div>
                        <span className="min-w-[120px] text-sm">
                          {ingredient.name}
                        </span>
                        <div className="flex flex-row gap-4">
                          <Input
                            type="number"
                            value={ingredient.quantity}
                            onChange={(e) =>
                              updateIngredient(ingredient.id, {
                                quantity: parseFloat(e.target.value) || 0,
                              })
                            }
                            className="w-20 bg-[#1C1C1C] border-custom-gold text-white"
                          />
                          <Select
                            value={ingredient.unit}
                            onValueChange={(value) =>
                              updateIngredient(ingredient.id, {
                                unit: value as Unit,
                              })
                            }
                          >
                            <SelectTrigger className="w-24 bg-[#1C1C1C] border-custom-gold text-white">
                              <SelectValue placeholder="Unit" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1C1C1C] border-custom-gold">
                              {units.map((unit) => (
                                <SelectItem
                                  key={unit}
                                  value={unit}
                                  className="text-white focus:bg-[#2C2C2C] focus:text-custom-gold"
                                >
                                  {unit}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-custom-gold hover:text-custom-gold-600 !hover:bg-transparent"
                        onClick={() => removeIngredient(ingredient.id)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
