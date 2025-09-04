# Workshop – To-Do List App in C# with Avalonia UI

Build a To-Do List application in two phases:
- Part 1: very simple features with minimal C# and UI (checkbox + save/load JSON)
- Part 2: optional advanced UI (tags, date picker, filters)

The goal is to get comfortable with C# syntax and Avalonia basics before adding structure.

---

## 0) Setup
All prerequisites and installation steps are in `SETUP.md`.
- Run the app: `dotnet run` (an Avalonia window should open)

---

## 1) Project Overview
- Language: C# (.NET 8)
- UI Toolkit: Avalonia UI
- Goal (Part 1): Add completion checkbox per task and save/load tasks to JSON

Initial model provided:
- `src/Models/TaskItem.cs`

---

## Part 1 – Minimal features (great for C beginners in C#)
Focus: simple C# classes and basic data binding in Avalonia. No complex architecture.

### 1.1 Extend the model slightly (if needed)
- Ensure `TaskItem` has at least:
  - `Title` (string)
  - `IsCompleted` (bool)
- Optional: add a simple `Id` (string or GUID) if it helps you manage selections, otherwise skip.

### 1.2 Show a checkbox for each task
- Bind a `CheckBox` to `IsCompleted` in the task list UI.
- When the user checks/unchecks it, the UI should update the task state immediately.

Acceptance check:
- You can toggle completion for any task from the list.

### 1.3 Add a "Save to JSON" button
- Add a button in the UI: "Save to JSON".
- On click, serialize the current list of tasks to `data/tasks.json`.
  - Create the `data/` folder if missing.
  - Use `System.Text.Json` to write/read JSON.

Acceptance check:
- After clicking the button, `data/tasks.json` is created/updated with your tasks.

### 1.4 Load tasks on startup (or via a "Load" button)
- Option A (recommended): when the app starts, try to read `data/tasks.json` and populate the task list.
- Option B: add a separate "Load" button that imports from the same file.

Acceptance check:
- If `data/tasks.json` exists, tasks appear in the UI after launch (or when pressing Load).

### 1.5 Keep it simple
- Store everything in a single list/collection in the code-behind or a simple view model.
- No repositories, no services, no DI for Part 1.

Part 1 complete when:
- You can add tasks, toggle completion with a checkbox, delete selected tasks (already present), and save/load JSON.

---

## Part 2 – Optional advanced features (UI + structure)
Focus: improve the UX and introduce light layering if you want.

### 2.1 Tags
- Add a `Tags` field (comma-separated) when creating/editing a task.
- Show tags as small chips/pills in the list.
- Add a filter by tag.

### 2.2 Due dates and calendar
- Add a `DueDate` (nullable) to `TaskItem`.
- Use Avalonia `DatePicker` for selection.
- Add quick filters: Today, This Week, Overdue.

### 2.3 Quality-of-life
- Edit task title inline.
- Buttons: Complete All, Clear Completed.
- Optional light structure: move file IO to a small helper/service.

### 2.4 Persistence polish
- Auto-save on changes (instead of manual button) if you feel comfortable.
- Handle missing/corrupted JSON gracefully.

Acceptance check (Part 2):
- Users can add tags and due dates, filter by status/tag/date, and data persists between runs.

---

## Helpful snippets (what to look up)
- `System.Text.Json` for JSON serialization/deserialization
- Avalonia bindings for `CheckBox.IsChecked` <-> `bool`
- `ObservableCollection<T>` for list data binding
- File I/O with `File.ReadAllText` / `File.WriteAllText` (create folder if needed)

---

## How to run
```bash
dotnet run
```
If everything is wired correctly, the window opens and shows your task list.

---

## What you will learn
- C# classes and properties
- Basic Avalonia data binding and events
- JSON save/load with `System.Text.Json`
- Incremental feature delivery from simple to advanced

## Authors

| [<img src="https://github.com/MiloKow.png?size=85" width=85><br><sub>Milo Kowalska</sub>](https://github.com/MiloKow)
| :---: |

<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn logo">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram logo"
>
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter logo">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord logo">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white" alt="Website logo">
    </a>
</p>

> 🚀 Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.