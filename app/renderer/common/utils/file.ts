import fs, {promises as fsPromiseAPIs} from 'fs';

const fileAction = {
    read: (path: string, encoding: BufferEncoding): Promise<string> => {
        return fsPromiseAPIs.readFile(path,{encoding: encoding||'utf-8'});
    },

    write: (path: string, content: string, encoding: BufferEncoding): Promise<void> => {
        return fsPromiseAPIs.writeFile(path, content, {encoding: encoding||'utf-8'});
    },

    rename: (oldPath: string, newPath: string) => {
        return fsPromiseAPIs.rename(oldPath,newPath);
    },

    delete: (path: string) => {
        return fsPromiseAPIs.unlink(path);
    },

    hasFile: (path: string) => {
        return fsPromiseAPIs.access(path,fs.constants.F_OK);
    },

    canWrite: (path: string) => {
        return fsPromiseAPIs.access(path,fs.constants.W_OK);
    },

    canRead: (path: string) => {
        return fsPromiseAPIs.access(path,fs.constants.R_OK);
    },
};

export default fileAction;