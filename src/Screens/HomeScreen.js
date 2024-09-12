import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Calender from "../CustomScreen/Calender";

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [enteredValue, setEnteredValue] = useState();

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateSelected = (date) => {
    setSelectedDate(date);
  };

  const addTaskHandler = () => {
    if (enteredValue.trim()) {
      setTasks([...tasks, { title: enteredValue, date: selectedDate }]);
      setEnteredValue("");
      setSelectedDate(null);
    }
  };

  return (
    <>
      <View className="flex-[0.2] justify-center items-center border-b-[0.2px] border-gray-300 bg-green-200">
        <View>
          <Text className="text-2xl font-extrabold my-2">TO-DO LIST APP</Text>
        </View>
        <View className="w-[95%] mx-auto flex-row justify-between mb-6">
          <TextInput
            className="pl-2 border-[0.5px] rounded-md w-[52%]"
            placeholder="Enter Your To-Do Task"
            value={enteredValue}
            onChangeText={(text) => setEnteredValue(text)}
          ></TextInput>

          <Calender onDateSelected={handleDateSelected} />

          <TouchableOpacity onPress={addTaskHandler}>
            <Text className="bg-blue-600 py-2 px-4  w-auto text-md text-white">
              Add Task
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-4">
        <Text className="text-lg text-center font-semibold underline">
          * Tasks To Complete *
        </Text>
        <View className="w-[90%] mx-auto">
          {tasks.map((task, index) => (
            <View
              key={index}
              className="flex-row justify-between items-center my-2 border-b-[0.5px] py-2"
            >
              <Text className="text-md">
                {index + 1}) {task.title}
              </Text>
              {task.date && (
                <Text className="text-sm text-gray-600">
                  (Deadline: {task.date.toLocaleString()})
                </Text>
              )}
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
