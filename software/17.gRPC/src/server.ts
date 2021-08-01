import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { loadPackageDefinition } from '@grpc/grpc-js';
import { ProtoGrpcType } from '../proto/pochat';

const protobuf = protoLoader.loadSync(path.resolve(__dirname, '../proto/pochat.proto'));
const protobufGrpcType = loadPackageDefinition(protobuf) as unknown as ProtoGrpcType;
const pochat = protobufGrpcType.PoChat;
