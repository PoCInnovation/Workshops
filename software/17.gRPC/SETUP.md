# Workshop 17 - Setup

## 1 - Installation

For this workshop, you will need the following tools:

- [go](https://go.dev/) - The programming language you'll use during the workshop
- [protoc](https://developers.google.com/protocol-buffers) - The protobuf compiler

You can install both of them using the following commands respectively:

### **go**
```shell
# Will download go binaries
wget https://go.dev/dl/go1.19.linux-amd64.tar.gz

# Will extract and move binaries into GOPATH
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.19.linux-amd64.tar.gz
```

Then, open your `.zshrc` or `.bashrc` file and append the following line at the end:
```shell
export PATH=$PATH:/usr/local/go/bin:$(go env GOPATH)/bin
```

### **protoc**

protoc is the protocol buffer compiler, you can install it with your package manager:
- under fedora: `sudo dnf install protobuf-compiler`
- under ubuntu: `sudo apt install protobuf-compiler`

or by following the instructions given [here](https://grpc.io/docs/protoc-installation/).

## 2 - Workshop

Create a folder for this workshop and run the following command inside to initialize the go project:
```shell
go mod init grpc-poc
```

Then run:
```shell
go install google.golang.org/protobuf/cmd/protoc-gen-go@1.28.1
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2
```

[Go back to the exercise](./README.md)
