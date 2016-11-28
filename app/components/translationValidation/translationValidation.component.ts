import {Component} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import {TMSdataService} from '../../services/TMSdata.service';

@Component({
    selector: 'translationValidation',
    templateUrl: '../app/components/translationValidation/translationValidation.html',
	 providers: [TMSdataService]
})

export class translationValidationComponent {
	private gridOptions:GridOptions;
	private appsData: any[];
	private tablesData: any[];
	private selectedApp="0";
	private selectedTable="0";
    private rowData: any[];
    private columnDefs: any[];
    constructor(private TMSdataService: TMSdataService) {this.gridOptions = <GridOptions>{};}
    ngOnInit() {
        this.TMSdataService.getTableData().subscribe(data => this.createColumnDefs(data));
		this.TMSdataService.getApps().subscribe(data => this.dataApps(data));
		this.TMSdataService.getTables().subscribe(data => this.dataTables(data));
    }
    private createColumnDefs(value) {
        var newColumnDefs = [];
		var rowData = [];
        if (value) {
            var listItem = value[0].acteurs[0];
            for (var prop in listItem) {
                newColumnDefs.push({
                    headerName: prop,
                    field: prop,
                    editable: true
                });
            }
        }
		this.rowData = value[0].acteurs;
        this.columnDefs = newColumnDefs;
		this.onModelUpdated();
		
    }
	private onModelUpdated() {
	console.log(this.gridOptions);
     
    }

	private dataApps(value) {
        if (value) {
		 var rows = value[0];
            this.appsData=rows.acteurs;
        }
     }
	private dataTables(value) {
        if (value) {
		var rows = value[0];
			this.tablesData=rows.acteurs;
       }
     }
	
}
