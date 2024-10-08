import React, { useState } from "react";
import useTaskStore, { progressTypes } from "../../stores/taskStore";
import usePageStore, { PageTypes } from "../../stores/pageStore";
import Alert, { TypeEnum } from "../base/Alert/Alert";

const NewTask = () => {
    const [task, setTask] = useState({ title: '', description: '' });
    const { addTask } = useTaskStore();
    const { updatePage } = usePageStore();

    const [triggerAlert, setTriggerAlert] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        e.preventDefault();
        setTask(prevTask => ({
            ...prevTask,
            [name]: value,
        }));
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newId = Date.now();
        addTask({ ...task, id: newId, status: progressTypes.PENDING });
        updatePage(PageTypes.HOME);
        setTriggerAlert(true);
        // Reset triggerAlert to false after a slight delay
        setTimeout(() => setTriggerAlert(false), 100);
        setTask({ title: '', description: '' });
    }

    return (
        <div className="max-w-content p-4 lg:p-6 bg-white border border-gray-200 rounded-lg shadow ">
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold leading-7 text-gray-900">Create new to-do task</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                    Add a new todo item here
                </p>
                <div className="mt-4">
                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                        Task Title
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                            <input
                                onChange={handleChange}
                                value={task.title}
                                name="title"
                                type="text"
                                placeholder="Take the trash out"
                                className="pl-2 block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                required
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                        Description
                    </label>
                    <div className="mt-2">
                        <textarea
                            onChange={handleChange}
                            value={task.description}
                            name="description"
                            rows={3}
                            className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Put a new bag in after"
                            defaultValue={''}
                        />
                    </div>
                </div>
                <button type="submit" className="mt-4 text-[#1A5319] bg-[#D6EFD8] hover:bg-[#80AF81] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create</button>
            </form>
            <Alert
                type={TypeEnum.SUCCESS}
                message="Task Created in Pending"
                dismissible={false}
                timeout={2000}
                displayMultiple={true}
                triggerAlert={triggerAlert}
            />
        </div>
    );
};

export default NewTask;
