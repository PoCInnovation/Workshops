# Setup – To-Do List App in C# with Avalonia UI

This workshop requires:
- **.NET 8 SDK or higher**
- **Git**
- (Optional) **Visual Studio Code** or **Rider/Visual Studio** for easier development

---

## 1. Install .NET SDK

### Fedora
```bash
sudo dnf update -y
sudo dnf install dotnet-sdk-8.0
```

### Arch Linux (Epitech default)
```bash
sudo pacman -Syu
sudo pacman -S dotnet-sdk
```

### macOS (with Homebrew)
```bash
brew update
brew install --cask dotnet-sdk
```

Once installed, verify the version:
```bash
dotnet --version
# Should output 8.x.x or higher
```

## 2. Install Git (if not already installed)

### Fedora / Arch
```bash
sudo dnf install git    # Fedora
sudo pacman -S git      # Arch
```

### macOS
```bash
brew install git
```

Verify installation:
```bash
git --version
```

## 3. Install Avalonia templates
```bash
dotnet new install Avalonia.Templates
```

Check they are correctly installed:
```bash
dotnet new list
# Should include Avalonia templates (e.g., avalonia.app)
```

## 4. Clone the workshop repository
```bash
git clone <your-repo-url>
cd <repo-folder>
```

## 5. Launch the project
To start the app:
```bash
dotnet run
```
If everything is working, a window should open.
