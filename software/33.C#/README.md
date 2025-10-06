# Workshop - Create a To-Do List Application with C# and Avalonia UI

✔ 🏗️ Understand C# and Avalonia UI fundamentals

✔ 📋 Build a complete task management application

✔ 💾 Implement data persistence with JSON

✔ 🎨 Create a modern and intuitive user interface

## Introduction in a few lines

If you've never worked with C# or modern user interfaces, this workshop is perfect for getting started. We'll build a task management application in two phases: first the essential features, then optional advanced improvements.

### What are C# and Avalonia UI?

🤓 Actually, **C#** is an object-oriented programming language developed by Microsoft, designed to be simple, modern and powerful. **Avalonia UI** is a cross-platform user interface development framework that allows you to create native desktop applications for Windows, macOS and Linux with a single codebase.

### Why is it useful?

Using C# with Avalonia UI offers several advantages:

- **Simplicity** 🎯: Clear and intuitive syntax, perfect for beginners
- **Performance** ⚡: Fast and responsive native applications
- **Cross-platform** 🌐: One application for all operating systems
- **Rich ecosystem** 🔧: Access to the huge .NET and NuGet library
- **Productivity** 🚀: Exceptional development tools with Visual Studio and VS Code

### What technology is used for this?

**C#** is a **modern programming language** specifically **designed to develop robust and maintainable applications**. It allows developers to **create desktop, web, mobile and gaming applications** with an **elegant and expressive syntax**. C# is based on the **.NET platform** and offers features like automatic memory management, object-oriented programming, and **perfect integration with the Microsoft ecosystem**. If you've never worked with C# before, check out the [official documentation](https://docs.microsoft.com/en-us/dotnet/csharp/) to understand the basics.

## Step 0 - Setup 💻
Please refer to the [SETUP.md](SETUP.md) file.

Once setup is complete, verify everything works:

```bash
dotnet run
```

An Avalonia window should open with your base application.

## Understanding the Project Structure 📁

Before diving into the tasks, let's understand how a C# project with Avalonia is organized:

### 📂 **Project Structure**:

```
src/
├── Models/
│   └── TaskItem.cs          # Data model representing a task
├── Views/
│   └── MainWindow.axaml     # Main UI layout (XAML file)
├── ViewModels/
│   └── MainWindowViewModel.cs # Logic behind the UI
├── Program.cs               # Application entry point
└── App.axaml               # Application-level configuration
```

### 🔍 **Key Files Explained**:

- **`TaskItem.cs`** : Contains the data structure for tasks (Title, IsCompleted, etc.)
- **`MainWindow.axaml`** : The visual interface layout (similar to HTML but for desktop apps)
- **`MainWindowViewModel.cs`** : Contains the business logic and data binding
- **`Program.cs`** : Starts the application and shows the main window

### 💡 **How It Works**:

1. **Models** define your data structure
2. **Views** (`.axaml` files) define the visual interface
3. **ViewModels** connect the data to the interface using data binding
4. **Program.cs** orchestrates everything together

This separation allows you to modify the interface without changing the logic, and vice versa.

## Part 1 - Essential Features ⚡ (perfect for C# beginners)

Focus: simple C# classes and basic data binding with Avalonia. No complex architecture.

## Step 1 - Extend the Data Model 🏗️

### 📑 **Description**:

In this step, you'll familiarize yourself with the `TaskItem` data model that represents a task in your application. The model is the data structure that contains all the information of a task. Understanding and mastering data models is fundamental in object-oriented programming.

In C#, **properties** are special class members that provide controlled access to private fields. They allow reading and writing values while encapsulating business logic if needed.

### 📌 **Tasks**:

- Examine the `src/Models/TaskItem.cs` file provided in the base project
- ✅ **Already implemented**: The `TaskItem` class already contains:
  - `Title` (string) - the task title
  - `IsCompleted` (bool) - the completion state of the task
- Optional: add a simple `Id` (string or GUID) if it helps you manage selections, otherwise skip this part

### 📚 **Documentation**:

- [Properties in C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/properties)
- [Data types in C#](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/built-in-types)
- [Classes and objects](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/types/classes)

## Step 2 - Display a checkbox for each task ✅

### 📑 **Description**:

In this step, you'll discover Avalonia UI's **data binding**. Data binding is a powerful mechanism that automatically synchronizes the user interface with your application data. When data changes, the UI updates automatically, and vice versa.

The `CheckBox` is a UI control that allows users to check or uncheck an option. By binding it to your task's `IsCompleted` property, you create a direct interaction between the interface and your data.

### 📌 **Tasks**:

- **Where to work**: Open `src/Views/MainWindow.axaml` - this is where the UI is defined
- **Find the task list**: Look for the `ListBox` or `ItemsControl` that displays tasks
- **Add CheckBox**: Inside each task item template, add a `CheckBox` control
- **Data binding**: Bind the `CheckBox`'s `IsChecked` property to the task's `IsCompleted` property using `{Binding IsCompleted}`
- **Test**: Ensure that when the user checks/unchecks the box, the task state updates immediately

### 💡 **Hint**:
The task list is likely displayed using a `ListBox` with an `ItemTemplate`. You'll need to modify this template to include the `CheckBox` alongside the task title.

### ✔️ **Validation Criteria**:

- You can toggle the completion state of any task from the list
- The checkbox visual state correctly reflects the task's `IsCompleted` state

### 📚 **Documentation**:

- [Data Binding in Avalonia](https://docs.avaloniaui.net/docs/data-binding/)
- [CheckBox Control](https://docs.avaloniaui.net/docs/controls/checkbox)
- [XAML in Avalonia](https://docs.avaloniaui.net/docs/basics/user-interface/introduction-to-xaml)

## Step 3 - Add a "Save to JSON" button 💾

### 📑 **Description**:

**JSON serialization** is the process of converting in-memory objects to a standardized text format (JSON) that can be stored in a file or transmitted over a network. This is an essential skill in modern development as JSON is the most widely used data exchange format.

`System.Text.Json` is Microsoft's recommended library for JSON serialization in .NET. It's performant, secure, and natively integrated into the framework.

### 📌 **Tasks**:

- Add a button in the user interface with the text "Save to JSON"
- Implement the button click logic to:
  - Create the `data/` folder if it doesn't exist
  - Serialize the current task list to `data/tasks.json`
  - Use `System.Text.Json` for serialization
- Handle potential errors (permissions, disk space, etc.)

### ✔️ **Validation Criteria**:

- After clicking the button, the `data/tasks.json` file is created/updated with your tasks
- The JSON file contains all tasks with their properties correctly serialized

### 📚 **Documentation**:

- [System.Text.Json](https://learn.microsoft.com/en-us/dotnet/api/system.text.json?view=net-9.0)
- [File handling in C#](https://docs.microsoft.com/en-us/dotnet/standard/io/)
- [Event handling in Avalonia](https://docs.avaloniaui.net/docs/basics/user-interface/adding-interactivity#handling-events)

## Step 4 - Load tasks on startup 🔄

### 📑 **Description**:

**Deserialization** is the reverse operation of serialization: it converts JSON data stored in a file into usable objects in your application. This step will teach you to manage application lifecycle and data persistence.

It's important to gracefully handle error cases: missing file, corrupted JSON, or permission issues. A robust application must work even if certain files are absent.

### 📌 **Tasks**:

- **Option A** (recommended): On application startup, try to read `data/tasks.json` and populate the task list
- **Option B**: Add a separate "Load" button that imports from the same file
- Implement deserialization with `System.Text.Json`
- Handle error cases:
  - Missing file: start with an empty list
  - Invalid JSON: display an error message and start with an empty list

### ✔️ **Validation Criteria**:

- If `data/tasks.json` exists, tasks appear in the UI after launch (or when pressing Load)
- The application works correctly even if the file doesn't exist

### 📚 **Documentation**:

- [JSON Deserialization](https://docs.microsoft.com/en-us/dotnet/standard/serialization/system-text-json/how-to)
- [Exception handling](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/)
- [Avalonia application lifetimes](https://docs.avaloniaui.net/docs/concepts/application-lifetimes)

## Step 5 - End of Part 1 Verification ✅

### 📑 **Description**:

For this first part, we prioritize simplicity and understanding of basic concepts rather than complex architecture. This approach allows you to focus on learning C# and Avalonia without being distracted by advanced patterns.

### 📌 **Verification Checklist**:

- ✅ Store everything in a single list/collection in the code-behind or a simple view model
- ✅ Avoid repositories, services, or dependency injection for this part
- ✅ Focus on the proper functioning of basic features

### ✔️ **Part 1 complete when**:

- You can add tasks
- You can toggle completion state with a checkbox
- You can delete selected tasks (already present)
- You can save/load from JSON

### 📚 **Documentation**:

- [ObservableCollection](https://docs.microsoft.com/en-us/dotnet/api/system.collections.objectmodel.observablecollection-1)

---

## Part 2 - Optional Advanced Features 🚀 (UI + structure)

Focus: improve the user experience and introduce light architecture if desired.

## Step 6 - Tag System 🏷️

### 📑 **Description**:

**Tags** (labels) are a powerful way to organize and categorize tasks. This feature will introduce you to string collections, text parsing, and more complex user interfaces with dynamic filters.

**Chips** or **pills** are compact UI elements that visually represent tags in an elegant and interactive way.

### 📌 **Tasks**:

- Add a `Tags` field (comma-separated) when creating/editing a task
- Display tags as small chips/pills in the task list
- Implement a tag filter with an intuitive interface
- Handle tag validation and cleanup (removing spaces, duplicates, etc.)

### ✔️ **Validation Criteria**:

- Users can add tags to their tasks
- Tags display in a visually appealing way
- The filter system works correctly

### 📚 **Documentation**:

- [String manipulation in C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/)
- [Collections in C#](https://docs.microsoft.com/en-us/dotnet/standard/collections/)
- [Avalonia styles and templates](https://docs.avaloniaui.net/docs/styling/)

## Step 7 - Due dates and calendar 📅

### 📑 **Description**:

Date management is crucial in a task management application. This step will teach you to work with `DateTime` and `DateOnly` types, use date selection controls, and implement temporal filtering logic.

**Quick filters** (Today, This Week, Overdue) significantly improve the user experience by providing quick access to the most relevant tasks.

### 📌 **Tasks**:

- Add a `DueDate` property (nullable) to `TaskItem`
- Integrate an Avalonia `DatePicker` for date selection
- Implement quick filters:
  - **Today**: tasks due today
  - **This week**: tasks due in the next 7 days
  - **Overdue**: tasks with a past date and not completed
- Add visual indicators for overdue tasks

### ✔️ **Validation Criteria**:

- Users can assign due dates to tasks
- Temporal filters work correctly
- Overdue tasks are clearly identifiable

### 📚 **Documentation**:

- [DateTime in C#](https://docs.microsoft.com/en-us/dotnet/api/system.datetime)
- [DatePicker in Avalonia](https://docs.avaloniaui.net/docs/controls/datepicker)
- [Nullable Reference Types](https://docs.microsoft.com/en-us/dotnet/csharp/nullable-references)

## Step 8 - Quality of life improvements 🛠️

### 📑 **Description**:

This step focuses on **user experience (UX)** and introducing a slightly more structured architecture. You'll learn to separate responsibilities and create more fluid and intuitive interactions.

**Inline editing** allows users to modify content directly without opening separate windows, significantly improving application fluidity.

### 📌 **Tasks**:

- Implement inline editing of task titles (double-click to edit)
- Add global action buttons:
  - **Complete All**: marks all tasks as completed
  - **Clear Completed**: removes all finished tasks
- Optional: move file management to a light helper/service
- Improve animations and transitions for a smoother experience

### ✔️ **Validation Criteria**:

- Inline editing works intuitively
- Global action buttons are functional
- The interface is more polished and professional

### 📚 **Documentation**:

- [User Controls in Avalonia](https://docs.avaloniaui.net/docs/controls/usercontrol)
- [Animations](https://docs.avaloniaui.net/docs/animations/)
- [Separation of concerns](https://docs.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/architectural-principles#separation-of-concerns)

## Step 9 - Persistence perfection 💎

### 📑 **Description**:

This final step will teach you to create a seamless user experience with **auto-save** and robust error handling. A professional application must function reliably even in case of unexpected problems.

### 📌 **Tasks**:

- Implement auto-save on changes (instead of manual button)
- Add graceful error handling:
  - Missing/corrupted JSON: recovery or reset
  - Permission issues: informative error messages
  - Insufficient disk space: appropriate handling
- Optional: add an automatic backup system
- Implement a save status indicator

### ✔️ **Validation Criteria (Part 2)**:

- Users can add tags and due dates
- Status/tag/date filters work perfectly
- Data persists between application runs
- The application gracefully handles all error cases

### 📚 **Documentation**:

- [File Watcher in .NET](https://docs.microsoft.com/en-us/dotnet/api/system.io.filesystemwatcher)
- [Robust error handling](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/best-practices-for-exceptions)
- [Asynchronous patterns](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/)

---

## Helpful snippets to look up 📖

- `System.Text.Json` for JSON serialization/deserialization
- Avalonia bindings for `CheckBox.IsChecked` <-> `bool`
- `ObservableCollection<T>` for list data binding
- File I/O with `File.ReadAllText` / `File.WriteAllText` (create folder if needed)
- `DateTime.Now` and `DateTime.Compare` for date management
- `string.Split(',')` and `string.Join(',')` for tags

---

## What you will learn 🎓

- **C# classes and properties**: Master OOP fundamentals
- **Avalonia data binding and events**: Create reactive interfaces
- **JSON serialization**: Handle modern data persistence
- **Incremental delivery**: From simple to advanced, professional methodology
- **Error handling**: Create robust and reliable applications
- **User experience**: Design intuitive and fluid interfaces

## Conclusion 🏁

Congratulations! You've created your own task management application with C# and Avalonia UI. Throughout this workshop, you've learned the fundamentals of modern desktop application development and mastered essential object-oriented programming concepts.

Thank you for following this workshop! If you have any questions, don't hesitate to contact the PoC team.

## To go further 🔼

You've discovered C# and Avalonia UI, but there are still many concepts to explore. Here are some examples:

- **[Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/)** for database management
- **[ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/)** for web applications
- **[MAUI](https://docs.microsoft.com/en-us/dotnet/maui/)** for cross-platform mobile applications
- **[Blazor](https://docs.microsoft.com/en-us/aspnet/core/blazor/)** for web applications with C#
- **[SignalR](https://docs.microsoft.com/en-us/aspnet/core/signalr/)** for real-time applications

## Authors 👋

| [<img src="https://github.com/MiloKow.png?size=85" width=85><br><sub>Milo Kowalska</sub>](https://github.com/MiloKow) |
| :--------------------------------------------------------------------------------------------------------------------: |

<h2 align="center">Organization</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align="center">
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different platforms, and give a star 🌟 to PoC's repositories.
