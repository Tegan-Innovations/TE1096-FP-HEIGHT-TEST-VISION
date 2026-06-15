declare module TcHmi {
    module Functions {
        module LeakTestersHMI {
            function MyRowClassesProvider(rowValue: {
                sHeightHMI: string;
                sVisionHMI: string;
                sLeakHMI: string;
                sPieceHMI: string;
                sTime: string;
                sDate: string;
            }, dataIndex: number, rowNumber: number): string[];
        }
    }
}
