Search.setIndex({envversion:47,filenames:["implementation","index","input_files","installation","module_content/gwip","module_content/gwip.config","module_content/gwip.db","module_content/gwip.formats","module_content/gwip.reporting","module_content/gwip.task","module_content/gwip.tests","module_content/gwip.tools","module_content/modules","output_files","tutorial","tutorials/tutorial_SKAT","tutorials/tutorial_cox","tutorials/tutorial_gwip","tutorials/tutorial_linear","tutorials/tutorial_logistic"],objects:{"":{gwip:[4,0,0,"-"]},"gwip.config":{parser:[5,0,0,"-"]},"gwip.config.parser":{parse_drmaa_config:[5,2,1,""]},"gwip.db":{utils:[6,0,0,"-"]},"gwip.db.utils":{check_task_completion:[6,2,1,""],create_task_db:[6,2,1,""],create_task_entry:[6,2,1,""],get_all_runtimes:[6,2,1,""],get_task_runtime:[6,2,1,""],mark_drmaa_task_completed:[6,2,1,""],mark_task_completed:[6,2,1,""],mark_task_incomplete:[6,2,1,""]},"gwip.error":{ProgramError:[4,4,1,""]},"gwip.formats":{impute2:[7,0,0,"-"]},"gwip.formats.impute2":{dosage_from_probs:[7,2,1,""],get_good_probs:[7,2,1,""],hard_calls_from_probs:[7,2,1,""],maf_from_probs:[7,2,1,""],matrix_from_line:[7,2,1,""]},"gwip.pipeline":{check_args:[4,2,1,""],check_strand:[4,2,1,""],compress_impute2_files:[4,2,1,""],compute_marker_missing_rate:[4,2,1,""],exclude_markers_before_phasing:[4,2,1,""],file_sorter:[4,2,1,""],final_exclusion:[4,2,1,""],flip_markers:[4,2,1,""],gather_execution_time:[4,2,1,""],gather_imputation_stats:[4,2,1,""],gather_maf_stats:[4,2,1,""],get_chrom_encoding:[4,2,1,""],get_chromosome_length:[4,2,1,""],get_cross_validation_results:[4,2,1,""],get_impute2_version:[4,2,1,""],get_plink_version:[4,2,1,""],get_shapeit_version:[4,2,1,""],impute_markers:[4,2,1,""],is_reversed:[4,2,1,""],main:[4,2,1,""],merge_impute2_files:[4,2,1,""],parse_args:[4,2,1,""],phase_markers:[4,2,1,""],read_preamble:[4,2,1,""]},"gwip.reporting":{autoreport:[8,0,0,"-"],utils:[8,0,0,"-"]},"gwip.reporting.autoreport":{generate_report:[8,2,1,""]},"gwip.reporting.utils":{colorize_time:[8,2,1,""],config_jinja2:[8,2,1,""],create_float:[8,2,1,""],create_tabular:[8,2,1,""],format_tex:[8,2,1,""],format_time:[8,2,1,""],sanitize_tex:[8,2,1,""],tex_inline_math:[8,2,1,""],wrap_tex:[8,2,1,""]},"gwip.task":{launcher:[9,0,0,"-"]},"gwip.task.launcher":{launch_tasks:[9,2,1,""]},"gwip.tests":{python_3_3_compatibility:[10,0,0,"-"],test_db:[10,0,0,"-"],test_formats:[10,0,0,"-"],test_impute2_merger:[10,0,0,"-"],test_imputed_stats:[10,0,0,"-"],test_launcher:[10,0,0,"-"],test_main_pipeline:[10,0,0,"-"],test_reporting_utils:[10,0,0,"-"]},"gwip.tests.python_3_3_compatibility":{Python_3_4_AssertLogsContext:[10,3,1,""],Python_3_4_BaseTestCaseContext:[10,3,1,""],Python_3_4_CapturingHandler:[10,3,1,""]},"gwip.tests.python_3_3_compatibility.Python_3_4_AssertLogsContext":{LOGGING_FORMAT:[10,6,1,""]},"gwip.tests.python_3_3_compatibility.Python_3_4_CapturingHandler":{emit:[10,1,1,""],flush:[10,1,1,""]},"gwip.tests.test_db":{TestDB:[10,3,1,""]},"gwip.tests.test_db.TestDB":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_check_task_completion:[10,1,1,""],test_create_db_connection:[10,1,1,""],test_create_task_db:[10,1,1,""],test_create_task_entry:[10,1,1,""],test_get_all_runtimes:[10,1,1,""],test_get_task_runtime:[10,1,1,""],test_mark_drmaa_task_completed:[10,1,1,""],test_mark_task_completed:[10,1,1,""],test_mark_task_incomplete:[10,1,1,""]},"gwip.tests.test_formats":{TestFormats:[10,3,1,""]},"gwip.tests.test_formats.TestFormats":{test_dosage_from_probs:[10,1,1,""],test_get_good_probs:[10,1,1,""],test_hard_calls_from_probs:[10,1,1,""],test_maf_from_probs:[10,1,1,""],test_matrix_from_line:[10,1,1,""]},"gwip.tests.test_impute2_merger":{TestImpute2Merger:[10,3,1,""]},"gwip.tests.test_impute2_merger.TestImpute2Merger":{clean_logging_handlers:[10,5,1,""],setUp:[10,1,1,""],tearDown:[10,1,1,""],test_check_alleles:[10,1,1,""],test_check_output_files:[10,1,1,""],test_completion_rates:[10,1,1,""],test_good_sites:[10,1,1,""],test_impute2:[10,1,1,""],test_imputed_sites:[10,1,1,""],test_maf:[10,1,1,""],test_map:[10,1,1,""]},"gwip.tests.test_imputed_stats":{TestImputedStats:[10,3,1,""],TestImputedStatsCox:[10,3,1,""],TestImputedStatsLinear:[10,3,1,""],TestImputedStatsLogistic:[10,3,1,""]},"gwip.tests.test_imputed_stats.TestImputedStats":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_check_args:[10,1,1,""],test_compute_statistics:[10,1,1,""],test_get_formula:[10,1,1,""],test_get_result_from_linear_logistic:[10,1,1,""],test_process_impute2_site:[10,1,1,""],test_read_phenotype:[10,1,1,""],test_read_samples:[10,1,1,""],test_read_sites_to_extract:[10,1,1,""],test_samples_with_hetero_calls:[10,1,1,""]},"gwip.tests.test_imputed_stats.TestImputedStatsCox":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_fit_cox:[10,1,1,""],test_fit_cox_interaction:[10,1,1,""],test_full_fit_cox:[10,1,1,""],test_full_fit_cox_interaction:[10,1,1,""],test_full_fit_cox_multiprocess:[10,1,1,""]},"gwip.tests.test_imputed_stats.TestImputedStatsLinear":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_fit_linear:[10,1,1,""],test_fit_linear_interaction:[10,1,1,""],test_full_fit_linear:[10,1,1,""],test_full_fit_linear_interaction:[10,1,1,""],test_full_fit_linear_multiprocess:[10,1,1,""]},"gwip.tests.test_imputed_stats.TestImputedStatsLogistic":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_fit_logistic:[10,1,1,""],test_fit_logistic_interaction:[10,1,1,""],test_full_fit_logistic:[10,1,1,""],test_full_fit_logistic_interaction:[10,1,1,""],test_full_fit_logistic_multiprocess:[10,1,1,""]},"gwip.tests.test_launcher":{TestLauncher:[10,3,1,""]},"gwip.tests.test_launcher.TestLauncher":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_check_impute2_file:[10,1,1,""],test_check_missing_impute2:[10,1,1,""],test_check_output_files:[10,1,1,""]},"gwip.tests.test_main_pipeline":{TestMainPipeline:[10,3,1,""]},"gwip.tests.test_main_pipeline.TestMainPipeline":{setUp:[10,1,1,""],tearDown:[10,1,1,""],test_check_args:[10,1,1,""],test_file_sorter:[10,1,1,""],test_gather_execution_time:[10,1,1,""],test_gather_imputation_stats:[10,1,1,""],test_gather_maf_stats:[10,1,1,""],test_get_chrom_encoding:[10,1,1,""],test_get_chromosome_length:[10,1,1,""],test_get_cross_validation_results:[10,1,1,""],test_is_reversed:[10,1,1,""],test_read_preamble:[10,1,1,""]},"gwip.tests.test_reporting_utils":{TestReportingUtils:[10,3,1,""]},"gwip.tests.test_reporting_utils.TestReportingUtils":{test_colorize_time:[10,1,1,""],test_create_float:[10,1,1,""],test_create_tabular:[10,1,1,""],test_format_tex:[10,1,1,""],test_format_time:[10,1,1,""],test_is_sanitized:[10,1,1,""],test_sanitize_tex:[10,1,1,""],test_tex_inline_math:[10,1,1,""],test_wrap_tex:[10,1,1,""]},"gwip.tools":{impute2_merger:[11,0,0,"-"],imputed_stats:[11,0,0,"-"]},"gwip.tools.impute2_merger":{check_args:[11,2,1,""],concatenate_files:[11,2,1,""],main:[11,2,1,""],parse_args:[11,2,1,""]},"gwip.tools.imputed_stats":{check_args:[11,2,1,""],compute_statistics:[11,2,1,""],fit_cox:[11,2,1,""],fit_linear:[11,2,1,""],fit_logistic:[11,2,1,""],get_formula:[11,2,1,""],main:[11,2,1,""],parse_args:[11,2,1,""],process_impute2_site:[11,2,1,""],read_phenotype:[11,2,1,""],read_samples:[11,2,1,""],read_sites_to_extract:[11,2,1,""],samples_with_hetero_calls:[11,2,1,""],skat_parse_impute2:[11,2,1,""],skat_read_snp_set:[11,2,1,""]},gwip:{config:[5,0,0,"-"],db:[6,0,0,"-"],error:[4,0,0,"-"],formats:[7,0,0,"-"],pipeline:[4,0,0,"-"],reporting:[8,0,0,"-"],task:[9,0,0,"-"],test:[4,2,1,""],tests:[10,0,0,"-"],tools:[11,0,0,"-"],version:[4,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:class","4":"py:exception","5":"py:staticmethod","6":"py:attribute"},terms:{"1000gp_phase3":17,"1000gp_phase3_chr":17,"1000gp_phase3_chr1":17,"1000gp_phase3_chr2":17,"12gb":17,"_check_impute2_fil":10,"_check_output_fil":10,"_combined_b37":17,"_create_db_connect":10,"_get_result_from_linear_logist":10,"_gwip_":11,"_is_sanit":10,"_static":17,"case":[4,10,15],"class":10,"default":[11,15,17],"final":[3,15],"float":8,"function":[4,10,11,14],"import":[3,15],"long":[3,15],"new":[3,15],"return":[4,11],"short":1,"static":10,"true":[9,15],"while":[6,11,14,15],about:15,absent:17,academ:17,accord:15,activ:[3,17],actual:[11,17],add:15,addit:15,after:15,again:15,algorithm:15,align:17,all:[3,4,6,10,15,17],allel:[4,7,10,15],allow:17,along:17,also:[1,7,15,17],altern:15,alwai:17,ambigu:4,analys:15,analysi:[1,3,11,14],analyz:[11,15,17],ani:[3,7,15,17],anoth:15,api:[4,17],appear:15,applic:15,approach:15,arbitrari:15,archiv:15,arg:[4,11],argument:[4,11,15],ask:11,assertlog:10,assess:17,assign:15,associ:15,assum:[7,15],attent:15,autom:17,automat:[11,17],autoreport:4,avail:[3,17],avoid:15,base:[4,10,15],bash:[3,17],becaus:15,bed:17,befor:[3,17],best:[15,17],beta:11,between:17,bfile:17,bgzip:17,bigzip:17,bim:17,bin:[3,17],binari:[4,17],bind:15,binomi:14,biolog:15,biopython:3,blood:15,both:15,build:17,bz2:17,call:[7,11],can:[3,11,15,17],candid:15,caption:8,captur:10,care:11,carefully_crafted_snp_set:15,cat:17,censur:11,ceu:17,chang:8,check:[4,6,10,11,17],check_arg:[4,10,11],check_rc:9,check_strand:4,check_task_complet:[6,10],choic:15,chr1:[4,17],chr1_10000001_15000000_walltim:17,chr2:17,chr2_node:17,chr2_ppn:17,chr2_walltim:17,chr:17,chrom:[4,17],chrom_length:4,chromfa:17,chromosom:[4,7,11,15,17],clean_logging_handl:10,clone:3,cluster:17,code:0,cohort:17,col_align:8,color:8,colorize_tim:[8,10],column:[7,11,15],com:3,come:11,comma:15,command:[3,4,9,11,15,17],comment:17,common:15,commonli:1,compar:15,compil:3,complet:[6,17],completion_r:10,completion_t:4,compress_impute2_fil:4,compris:17,comput:[4,7,11,15,17],compute_marker_missing_r:4,compute_statist:[10,11],concaten:11,concatenate_fil:11,concret:15,conda:3,conduct:15,config:4,config_jinja2:8,configfil:5,configur:[5,8],consid:[11,15],consist:15,contact:15,contain:[11,15,17],content:0,context:10,continu:15,continuum:3,copi:17,correct:15,correctli:15,correspond:[11,15],could:15,count:7,covar:[11,15],covari:[11,15],cox:[10,11,14,15],cpu:15,creat:[3,4,6,8,11,14],create_float:[8,10],create_tabular:[8,10],create_task_db:[6,10],create_task_entri:[6,10],cross:4,cse:17,csv:15,current:15,custom:[11,15],data:[1,3,8,11,14,15,17],dataset:[4,17],db_name:[4,6],decreas:15,defin:15,delet:17,deleteri:15,delimit:[11,15],dep:3,depend:[3,15,17],describ:14,descript:[0,15],detail:14,determin:[11,15],develop:[3,15],differ:[15,17],dir:17,directli:3,directori:[3,15,17],discard:11,discret:15,disk:[11,17],dispatch:11,distribut:14,document:1,doe:11,doesn:[3,17],don:15,done:[15,17],dosag:[1,7],dosage_from_prob:[7,10],download:1,drawback:17,drmaa:[5,6],duplic:4,each:[4,17],earlier:15,easi:[1,15],easier:3,edu:17,effici:1,either:[8,15],emit:10,empti:17,encod:4,end_tim:6,enough:17,ensembl:4,entri:6,env:17,environ:[3,8,17],equal:17,error:0,especi:15,etc:4,even:15,everi:[11,15],everyth:15,exampl:[14,15,17],exceed:17,except:[4,7],exclud:4,exclude_markers_before_phas:4,execut:[4,6,9,14],exist:6,exm295293:15,expect:[11,14,15],explain:[15,17],explan:15,extend:15,extens:15,extern:17,extract:[11,15,17],facilit:15,fai:17,faidx:17,fail:17,fals:[4,8,9],fam:[15,17],familiar:15,fasta:17,father:[11,15],featur:15,femal:7,field:15,file:1,file_sort:[4,10],filenam:[4,11],filename_templ:4,fill:11,filter:17,final_exclus:4,find:4,finish:[10,17],first:[11,14,15,17],fit:11,fit_cox:[10,11],fit_linear:[10,11],fit_logist:[10,11],five:17,flag:15,flip:4,flip_mark:4,float_typ:8,flush:10,follow:[3,11,15,17],forget:[15,17],format:4,format_tex:[8,10],format_tim:[8,10],formula:[8,11],freeli:17,frequenc:[4,15],from:[3,4,7,11],full:[10,11,14,15],further:15,gather:[4,7],gather_execution_tim:[4,10],gather_imputation_stat:[4,10],gather_maf_stat:[4,10],gcc:17,gen:11,gender:[7,11],gene:15,gener:[7,8,11,14],generate_report:8,genetic_map_chr1_combined_b37:17,genetic_map_chr2_combined_b37:17,genetic_map_chr:17,genotyp:[7,14,15],get:[4,6,11],get_all_runtim:[6,10],get_chrom_encod:[4,10],get_chromosome_length:[4,10],get_cross_validation_result:[4,10],get_formula:[10,11],get_good_prob:[7,10],get_impute2_vers:4,get_plink_vers:4,get_shapeit_vers:4,get_task_runtim:6,git:3,github:[3,15,17],given:15,glm:14,glob_pattern:4,goldenpath:17,good:7,good_sit:[10,15],grch36:17,grch37:17,greatli:15,group:15,guidelin:17,gwip:[0,1,3],gwip_config:17,gwip_is_great:15,gwip_pyvenv:3,gwip_tut:17,gwip_tutori:17,handler:10,hap:17,hapmap_ceu_r23a_hg19:17,hard:7,hard_calls_from_prob:[7,10],have:[4,15,17],hazard:[11,14],header:[8,15],header_multicol:8,help:[4,15],henc:[7,15],here:[0,3,15,17],hesit:15,hetero_c:11,hetero_prob:7,heterozyg:[7,11,15],hg19:17,hgdownload:17,high:17,higher:[3,17],home:[3,17],homo_prob:7,homozyg:15,hour:[8,17],how:15,hpc:9,hpc_option:9,htslib:17,http:[3,17],hypertens:15,i_filenam:11,id_1:[11,15],id_2:[11,15],id_suffix:4,identifi:[11,15],imiss:17,imposs:17,improv:15,impute2:[1,4],impute2_filenam:11,impute2_lin:7,impute2_merg:4,impute_mark:4,imputed_sit:10,imputed_stat:4,in_glob:4,includ:[11,15,17],incomplet:6,increas:17,index:17,infer:17,inform:[11,15,17],ini:17,inlin:8,input:1,insert:17,instal:1,instead:3,insur:15,interact:[10,11],interest:[11,15],intern:15,interpret:15,introduc:17,is_revers:[4,10],issu:15,itself:14,jinja2:[3,8],jxf:17,keep:[4,15,17],kept:17,known:15,kwarg:11,label:8,larger:15,last:15,latest:3,latter:[3,15],launch:[3,11,15,17],launch_task:9,launch_tim:6,launcher:4,least:[14,17],legend:17,length:4,level:[10,15],levelnam:10,licens:17,life:15,lifelin:3,lift:17,liftov:17,like:15,line:[4,7,11,15,17],linear:[1,10,11],link:[14,17],linux:3,list:[11,15,17],lmiss:17,load:17,locat:[3,17],log:[10,15,17],logger_nam:10,logging_format:10,logist:[1,10,11],logit:14,look:15,machin:[3,15],maf:[7,10,15],maf_from_prob:[7,10],main:[4,11,14,17],major:15,make:[3,15],male:[7,11],manag:[3,10,14,15],mani:15,manual:15,map:[10,17],mark:6,mark_drmaa_task_complet:[6,10],mark_task_complet:[6,10],mark_task_incomplet:[6,10],marker:[4,17],markers_to_exclud:17,markers_to_extract:11,markers_to_flip:17,mathemat:8,matplotlib:3,matrix:[7,15],matrix_from_lin:[7,10],mean:4,memori:17,merg:4,merge_impute2:[11,17],merge_impute2_fil:4,messag:10,method:[3,17],methodnam:10,million:17,min_prob:7,mind:17,miniconda3:3,miniconda:1,minor:[4,7,15],minut:[8,17],miss:[3,4,10,11,15,17],mkdir:17,mod:15,model:14,modifi:[15,17],modul:[0,1,3],more:17,most:[11,17],mostli:11,mother:[11,15],msg:4,much:15,multipl:[15,17],my_skat_analysi:15,name:[10,15,17],narrow:15,navig:14,nb_sampl:4,nb_thread:9,necessarili:15,need:[4,15],neutral:15,node:17,none:[7,8,9,11],note:15,noteworthi:15,noth:11,notic:15,now:[3,17],nucleotid:17,number:[7,11,15,17],numpi:3,o_dir:4,o_prefix:4,object:[10,14],occur:15,offici:3,often:15,omit:15,onc:[3,15,17],onli:[3,4,11,15,17],open:15,opt:11,optim:17,option:[3,4,11,15],order:15,ordinari:14,original_text:8,other:[14,15],otherwis:17,our:15,out:15,out_dir:[4,6,8,9],out_prefix:[4,11],outcom:15,output:[1,10],over:[15,17],packag:[0,3],page:[15,17],panda:[3,11],parallel:[11,15],paramet:[11,17],parametr:17,pars:[4,5,11],parse_arg:[4,11],parse_drmaa_config:5,parser:4,part:15,pass:[11,15],path:17,pathwai:15,pedfil:17,perform:[1,14,15,17],pgxcentr:[3,17],phase:[4,17],phase_mark:4,phased_haplotyp:4,pheno:15,phenotyp:[11,14],pip:3,pipelin:0,placement:8,platform:17,pleas:15,plink:[1,4,15,17],plink_exclud:17,plink_final_exclud:17,plink_flip:17,plink_missing_r:17,plink_pheno:[11,15],popular:15,posit:15,possibl:[3,15,17],power:[15,17],ppn:17,practic:[15,17],pre:17,preambl:[4,9],predict:15,prefix:[4,15],presenc:10,present:[14,15],pressur:15,previou:[3,15,17],previous:[3,15,17],prior:15,priorit:15,prob:7,prob_matrix:7,prob_t:4,probability_t:4,probabl:[7,15],problem:[4,15],process:[10,11,15,17],process_impute2_sit:[10,11],produc:11,program:15,programerror:4,progress:[1,17],project:17,proport:[11,14],provid:[1,14,15,17],publicli:17,push:15,pyfaidx:3,python:[3,17],python_3_3_compat:4,python_3_4_assertlogscontext:10,python_3_4_basetestcasecontext:10,python_3_4_capturinghandl:10,python_env:17,pyvenv:1,qualiti:15,quantit:15,question:15,queue:11,quick:14,rais:[4,7],ran:3,rare:[1,15],rarest:15,rate:[4,17],raw:10,read:[4,11,15,17],read_phenotyp:[10,11],read_preambl:[4,10],read_sampl:[10,11],read_sites_to_extract:11,reader:15,readi:15,real:15,real_chrom:11,recent:17,recogn:11,recommend:3,record:10,refer:[4,15],regress:[1,10,11,14,15],regular:15,releas:3,remove_gend:11,render:15,repo:3,report:4,repres:[7,15],reproduc:15,request:15,requir:[3,7,14,15],rerun:17,resembl:15,reserv:17,resourc:17,respect:17,rest:4,result:[11,14],result_col:11,row:[11,15],rs123456:11,rs143768051:15,rs183736430:15,rs202028804:15,rs369840848:15,rs375511922:15,rs79511213:15,rule:17,run:[6,11,14],run_info:8,run_opt:8,run_skat:15,runtest:10,runtim:17,same:[15,17],sampl:[7,11],sample1:15,sample2:15,sample3:15,sample4:15,samples_with_hetero_cal:[10,11],samtool:17,sanit:8,sanitize_tex:[8,10],scale:7,scheme:[11,15],scope:15,script:[11,14],second:[8,15],section:[14,17],see:15,segment:17,select:15,send:15,separ:[11,15],seq:17,server:17,set1:15,set2:15,set:[11,14],setup:10,setuptool:3,sex:[11,15],shape:7,shapeit2:4,shapeit:[1,4,11,17],shapeit_check_1:17,shapeit_check_2:17,shapeit_phas:17,shebang:17,should:[3,4,11,15,17],show:15,shown:[11,15],simpli:[3,11,15],simplic:[3,15],simultan:15,sinc:[3,17],singl:[11,15,17],site:11,site_info:11,site_nam:7,size:15,skat:[1,11],skat_parse_impute2:11,skat_read_snp_set:11,skip:[3,17],skip_drmaa_config:17,small:15,snp:[11,14],snp_set:[11,15],softwar:[1,14],some:[11,14,17],someth:15,sort:4,sourc:[0,3,4,5,6,7,8,9,10,11,15,17],space:17,specif:15,specifi:[11,15,17],split:4,squar:14,standalon:1,standard:3,start:[15,17],start_tim:6,stat:15,statist:[1,3,4,11,14],statsmodel:[3,11],step:[11,15,17],still:[3,17],str:11,straightforward:15,strand:[4,17],structur:[15,17],studi:[15,17],subpackag:0,subsequ:[11,15],subset:17,successfulli:3,suggest:15,supplement:17,suppli:11,support:3,sure:3,surviv:1,system:17,systol:15,systolicbp:15,tab:[11,15],tabular:8,take:11,tar:17,task:[4,5,6],task_id:6,task_runtim:10,teardown:10,templat:[8,15,17],temporari:17,test:1,test_cas:10,test_check_allel:10,test_check_arg:10,test_check_impute2_fil:10,test_check_missing_impute2:10,test_check_output_fil:10,test_check_task_complet:10,test_colorize_tim:10,test_completion_r:10,test_compute_statist:10,test_create_db_connect:10,test_create_float:10,test_create_tabular:10,test_create_task_db:10,test_create_task_entri:10,test_db:4,test_dosage_from_prob:10,test_file_sort:10,test_fit_cox:10,test_fit_cox_interact:10,test_fit_linear:10,test_fit_linear_interact:10,test_fit_logist:10,test_fit_logistic_interact:10,test_format:4,test_format_tex:10,test_format_tim:10,test_full_fit_cox:10,test_full_fit_cox_interact:10,test_full_fit_cox_multiprocess:10,test_full_fit_linear:10,test_full_fit_linear_interact:10,test_full_fit_linear_multiprocess:10,test_full_fit_logist:10,test_full_fit_logistic_interact:10,test_full_fit_logistic_multiprocess:10,test_gather_execution_tim:10,test_gather_imputation_stat:10,test_gather_maf_stat:10,test_get_all_runtim:10,test_get_chrom_encod:10,test_get_chromosome_length:10,test_get_cross_validation_result:10,test_get_formula:10,test_get_good_prob:10,test_get_result_from_linear_logist:10,test_get_task_runtim:10,test_good_sit:10,test_hard_calls_from_prob:10,test_impute2:10,test_impute2_merg:4,test_imputed_sit:10,test_imputed_stat:4,test_is_revers:10,test_is_sanit:10,test_launch:4,test_maf:10,test_maf_from_prob:10,test_main_pipelin:4,test_map:10,test_mark_drmaa_task_complet:10,test_mark_task_complet:10,test_mark_task_incomplet:10,test_matrix_from_lin:10,test_process_impute2_sit:10,test_read_phenotyp:10,test_read_preambl:10,test_read_sampl:10,test_read_sites_to_extract:10,test_reporting_util:4,test_samples_with_hetero_cal:10,test_sanitize_tex:10,test_tex_inline_math:10,test_wrap_tex:10,testcas:10,testdb:10,testformat:10,testimpute2merg:10,testimputedstat:10,testimputedstatscox:10,testimputedstatslinear:10,testimputedstatslogist:10,testlaunch:10,testmainpipelin:10,testreportingutil:10,tex:8,tex_format:8,tex_inline_math:[8,10],text:[8,17],than:17,thei:[3,11,15,17],them:15,thi:[3,4,11,14],third:15,those:[4,15,17],thousand:17,thread:17,three:[1,15,17],threshold:[7,11,15],through:[14,15],throughout:15,throughput:17,time:[4,6,8,15,17],time_to_ev:11,titl:17,to_exclud:4,to_flip:4,to_process:9,togeth:15,tool:[1,3,4],total_second:8,tracker:15,trait:15,tree:17,trigger:11,triplet:15,tutori:1,two:[3,15,17],txt:[15,17],type:[11,15],typic:[11,14],ucsc:17,under:15,unfortun:17,uniqu:11,unittest:10,unless:11,unsatisfi:15,updat:6,usc:17,useful:17,user:[11,15],usr:17,util:4,valid:[4,15],valu:15,variabl:[15,17],variant:[1,11,15,17],variat:17,veri:15,verifi:[11,15,17],version:[0,3],virtual:[3,17],visibl:15,wai:[1,3,17],walk:[14,15],walltim:17,want:15,warn:15,websit:17,weigh:4,weight:[11,15],well:15,were:[15,17],wget:[3,17],what:[4,17],whatev:17,when:[3,7,11,15,17],where:[7,15,17],which:[14,15,17],who:15,word:15,work:[15,17],would:15,wrap:8,wrap_tex:[8,10],write:[11,15],written_tim:8,x86_64:3,yield:15,you:[15,17],your:[15,17],zxf:17},titles:["Implementation","Genome-Wide Imputation Pipeline","Input Files","Installation","gwip package","gwip.config package","gwip.db package","gwip.formats package","gwip.reporting package","gwip.task package","gwip.tests package","gwip.tools package","gwip","Output Files","Short Tutorials","SKAT Tutorial","Survival Tutorial","Pipeline Tutorial","Linear Tutorial","Logistic Tutorial"],titleterms:{"short":14,analysi:15,autoreport:8,call:15,config:5,configur:17,content:[4,5,6,7,8,9,10,11],creat:15,deriv:15,describ:15,dosag:15,download:3,drmaa:17,error:4,execut:17,file:[2,13,15,17],format:[7,15],from:15,gener:15,genom:[1,17],genotyp:17,good:15,gwip:[4,5,6,7,8,9,10,11,12,15],hard:15,human:17,implement:0,imput:[1,17],impute2:[7,15],impute2_merg:11,imputed_stat:11,input:[2,15,17],instal:3,introduct:1,launcher:9,linear:[14,18],logist:[14,19],miniconda:3,modul:[4,5,6,7,8,9,10,11],navig:[15,16,17,18,19],option:17,output:[13,17],packag:[4,5,6,7,8,9,10,11],panel:17,parser:5,phenotyp:15,pipelin:[1,4,14,17],preambl:17,python_3_3_compat:10,pyvenv:3,quick:[15,16,17,18,19],refer:17,report:8,requir:17,result:15,run:15,sampl:15,script:15,set:15,site:15,skat:[14,15],snp:15,softwar:17,subpackag:4,summari:17,surviv:[14,16],task:9,test:[3,10],test_db:10,test_format:10,test_impute2_merg:10,test_imputed_stat:10,test_launch:10,test_main_pipelin:10,test_reporting_util:10,thi:15,tool:11,tutori:[14,15,16,17,18,19],util:[6,8],version:4,wide:[1,17]}})