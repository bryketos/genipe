Search.setIndex({envversion:50,filenames:["execution_time","implementation","index","input_files","installation","module_content/genipe","module_content/genipe.config","module_content/genipe.db","module_content/genipe.formats","module_content/genipe.reporting","module_content/genipe.task","module_content/genipe.tests","module_content/genipe.tools","module_content/modules","output_files","parameters","parameters/impute2_extractor","parameters/impute2_merger","parameters/imputed_stats","parameters/main_pipeline","tutorials","tutorials/tutorial_SKAT","tutorials/tutorial_cox","tutorials/tutorial_extract","tutorials/tutorial_genipe","tutorials/tutorial_linear","tutorials/tutorial_logistic","tutorials/tutorial_mixedlm"],objects:{"":{genipe:[5,0,0,"-"]},"genipe.config":{parser:[6,0,0,"-"]},"genipe.config.parser":{parse_drmaa_config:[6,1,1,""]},"genipe.db":{utils:[7,0,0,"-"]},"genipe.db.utils":{check_task_completion:[7,1,1,""],create_task_db:[7,1,1,""],create_task_entry:[7,1,1,""],get_all_runtimes:[7,1,1,""],get_task_runtime:[7,1,1,""],mark_drmaa_task_completed:[7,1,1,""],mark_task_completed:[7,1,1,""],mark_task_incomplete:[7,1,1,""]},"genipe.error":{GenipeError:[5,2,1,""]},"genipe.formats":{impute2:[8,0,0,"-"],index:[8,0,0,"-"]},"genipe.formats.impute2":{additive_from_probs:[8,1,1,""],dosage_from_probs:[8,1,1,""],get_good_probs:[8,1,1,""],hard_calls_from_probs:[8,1,1,""],maf_dosage_from_probs:[8,1,1,""],maf_from_probs:[8,1,1,""],matrix_from_line:[8,1,1,""]},"genipe.formats.index":{get_index:[8,1,1,""],get_open_func:[8,1,1,""]},"genipe.reporting":{autoreport:[9,0,0,"-"],utils:[9,0,0,"-"]},"genipe.reporting.autoreport":{generate_report:[9,1,1,""]},"genipe.reporting.utils":{colorize_time:[9,1,1,""],config_jinja2:[9,1,1,""],create_float:[9,1,1,""],create_tabular:[9,1,1,""],format_tex:[9,1,1,""],format_time:[9,1,1,""],sanitize_tex:[9,1,1,""],tex_inline_math:[9,1,1,""],wrap_tex:[9,1,1,""]},"genipe.task":{launcher:[10,0,0,"-"]},"genipe.task.launcher":{launch_tasks:[10,1,1,""]},"genipe.tests":{python_3_3_compatibility:[11,0,0,"-"],test_db:[11,0,0,"-"],test_formats:[11,0,0,"-"],test_impute2_extractor:[11,0,0,"-"],test_impute2_merger:[11,0,0,"-"],test_imputed_stats:[11,0,0,"-"],test_launcher:[11,0,0,"-"],test_main_pipeline:[11,0,0,"-"],test_reporting_utils:[11,0,0,"-"]},"genipe.tests.python_3_3_compatibility":{Python_3_4_AssertLogsContext:[11,3,1,""],Python_3_4_BaseTestCaseContext:[11,3,1,""],Python_3_4_CapturingHandler:[11,3,1,""]},"genipe.tests.python_3_3_compatibility.Python_3_4_AssertLogsContext":{LOGGING_FORMAT:[11,4,1,""]},"genipe.tests.python_3_3_compatibility.Python_3_4_CapturingHandler":{emit:[11,5,1,""],flush:[11,5,1,""]},"genipe.tests.test_db":{TestDB:[11,3,1,""]},"genipe.tests.test_db.TestDB":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_check_task_completion:[11,5,1,""],test_create_db_connection:[11,5,1,""],test_create_task_db:[11,5,1,""],test_create_task_entry:[11,5,1,""],test_get_all_runtimes:[11,5,1,""],test_get_task_runtime:[11,5,1,""],test_mark_drmaa_task_completed:[11,5,1,""],test_mark_task_completed:[11,5,1,""],test_mark_task_incomplete:[11,5,1,""]},"genipe.tests.test_formats":{TestFormats:[11,3,1,""]},"genipe.tests.test_formats.TestFormats":{test_additive_from_probs:[11,5,1,""],test_dosage_from_probs:[11,5,1,""],test_get_good_probs:[11,5,1,""],test_hard_calls_from_probs:[11,5,1,""],test_maf_dosage_from_probs:[11,5,1,""],test_maf_from_probs:[11,5,1,""],test_matrix_from_line:[11,5,1,""]},"genipe.tests.test_impute2_extractor":{TestImpute2Extractor:[11,3,1,""]},"genipe.tests.test_impute2_extractor.TestImpute2Extractor":{clean_logging_handlers:[11,6,1,""],setUp:[11,5,1,""],tearDown:[11,5,1,""],test_extract:[11,5,1,""],test_genomic:[11,5,1,""],test_genomic_info:[11,5,1,""],test_genomic_maf:[11,5,1,""],test_genomic_maf_info:[11,5,1,""],test_genomic_maf_rate:[11,5,1,""],test_genomic_maf_rate_info:[11,5,1,""],test_genomic_rate:[11,5,1,""],test_info:[11,5,1,""],test_maf:[11,5,1,""],test_maf_info:[11,5,1,""],test_maf_rate:[11,5,1,""],test_maf_rate_info:[11,5,1,""],test_rate:[11,5,1,""],test_rate_info:[11,5,1,""]},"genipe.tests.test_impute2_merger":{TestImpute2Merger:[11,3,1,""]},"genipe.tests.test_impute2_merger.TestImpute2Merger":{clean_logging_handlers:[11,6,1,""],setUp:[11,5,1,""],tearDown:[11,5,1,""],test_check_alleles:[11,5,1,""],test_check_output_files:[11,5,1,""],test_completion_rates:[11,5,1,""],test_good_sites:[11,5,1,""],test_impute2:[11,5,1,""],test_impute2_info:[11,5,1,""],test_imputed_sites:[11,5,1,""],test_maf:[11,5,1,""],test_map:[11,5,1,""]},"genipe.tests.test_imputed_stats":{TestImputedStats:[11,3,1,""],TestImputedStatsCox:[11,3,1,""],TestImputedStatsLinear:[11,3,1,""],TestImputedStatsLogistic:[11,3,1,""],TestImputedStatsMixedLM:[11,3,1,""],TestImputedStatsSkat:[11,3,1,""]},"genipe.tests.test_imputed_stats.TestImputedStats":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_check_args:[11,5,1,""],test_compute_statistics:[11,5,1,""],test_get_formula:[11,5,1,""],test_process_impute2_site:[11,5,1,""],test_read_phenotype:[11,5,1,""],test_read_samples:[11,5,1,""],test_read_sites_to_extract:[11,5,1,""],test_samples_with_hetero_calls:[11,5,1,""]},"genipe.tests.test_imputed_stats.TestImputedStatsCox":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_fit_cox_interaction_snp1:[11,5,1,""],test_fit_cox_invalid:[11,5,1,""],test_fit_cox_snp1:[11,5,1,""],test_fit_cox_snp2:[11,5,1,""],test_fit_cox_snp3:[11,5,1,""],test_full_fit_cox:[11,5,1,""],test_full_fit_cox_interaction:[11,5,1,""],test_full_fit_cox_multiprocess:[11,5,1,""]},"genipe.tests.test_imputed_stats.TestImputedStatsLinear":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_fit_linear_interaction:[11,5,1,""],test_fit_linear_invalid:[11,5,1,""],test_fit_linear_snp1:[11,5,1,""],test_fit_linear_snp2:[11,5,1,""],test_fit_linear_snp3:[11,5,1,""],test_full_fit_linear:[11,5,1,""],test_full_fit_linear_interaction:[11,5,1,""],test_full_fit_linear_multiprocess:[11,5,1,""]},"genipe.tests.test_imputed_stats.TestImputedStatsLogistic":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_fit_logistic_interaction:[11,5,1,""],test_fit_logistic_invalid:[11,5,1,""],test_fit_logistic_snp1:[11,5,1,""],test_fit_logistic_snp2:[11,5,1,""],test_fit_logistic_snp3:[11,5,1,""],test_full_fit_logistic:[11,5,1,""],test_full_fit_logistic_interaction:[11,5,1,""],test_full_fit_logistic_multiprocess:[11,5,1,""]},"genipe.tests.test_imputed_stats.TestImputedStatsMixedLM":{setUp:[11,5,1,""],setUpClass:[11,7,1,""],tearDown:[11,5,1,""],test_fit_mixedlm_interaction:[11,5,1,""],test_fit_mixedlm_interaction_use_ml:[11,5,1,""],test_fit_mixedlm_invalid_column:[11,5,1,""],test_fit_mixedlm_snp1:[11,5,1,""],test_fit_mixedlm_snp1_use_ml:[11,5,1,""],test_fit_mixedlm_snp2:[11,5,1,""],test_fit_mixedlm_snp2_use_ml:[11,5,1,""],test_fit_mixedlm_snp3:[11,5,1,""],test_fit_mixedlm_snp3_use_ml:[11,5,1,""],test_full_fit_mixedlm:[11,5,1,""],test_full_fit_mixedlm_interaction:[11,5,1,""],test_full_fit_mixedlm_interaction_use_ml:[11,5,1,""],test_full_fit_mixedlm_multiprocess:[11,5,1,""],test_full_fit_mixedlm_multiprocess_use_ml:[11,5,1,""],test_full_fit_mixedlm_use_ml:[11,5,1,""]},"genipe.tests.test_imputed_stats.TestImputedStatsSkat":{args:[11,4,1,""],setUpClass:[11,7,1,""],setup_skat_files:[11,6,1,""],tearDownClass:[11,7,1,""],test_continuous:[11,5,1,""],test_continuous_multiprocess:[11,5,1,""],test_discrete:[11,5,1,""],test_discrete_multiprocess:[11,5,1,""],tmp_dir:[11,4,1,""]},"genipe.tests.test_launcher":{TestLauncher:[11,3,1,""]},"genipe.tests.test_launcher.TestLauncher":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_check_impute2_file:[11,5,1,""],test_check_missing_impute2:[11,5,1,""],test_check_output_files:[11,5,1,""]},"genipe.tests.test_main_pipeline":{TestMainPipeline:[11,3,1,""]},"genipe.tests.test_main_pipeline.TestMainPipeline":{setUp:[11,5,1,""],tearDown:[11,5,1,""],test_file_sorter:[11,5,1,""],test_gather_execution_time:[11,5,1,""],test_gather_imputation_stats:[11,5,1,""],test_gather_maf_stats:[11,5,1,""],test_get_chrom_encoding:[11,5,1,""],test_get_chromosome_length:[11,5,1,""],test_get_cross_validation_results:[11,5,1,""],test_is_reversed:[11,5,1,""],test_read_preamble:[11,5,1,""]},"genipe.tests.test_reporting_utils":{TestReportingUtils:[11,3,1,""]},"genipe.tests.test_reporting_utils.TestReportingUtils":{test_colorize_time:[11,5,1,""],test_create_float:[11,5,1,""],test_create_tabular:[11,5,1,""],test_format_tex:[11,5,1,""],test_format_time:[11,5,1,""],test_is_sanitized:[11,5,1,""],test_sanitize_tex:[11,5,1,""],test_tex_inline_math:[11,5,1,""],test_wrap_tex:[11,5,1,""]},"genipe.tools":{genipe_tutorial:[12,0,0,"-"],impute2_extractor:[12,0,0,"-"],impute2_merger:[12,0,0,"-"],imputed_stats:[12,0,0,"-"]},"genipe.tools.genipe_tutorial":{check_files:[12,1,1,""],download_file:[12,1,1,""],generate_bash:[12,1,1,""],get_genotypes:[12,1,1,""],get_hg19:[12,1,1,""],get_impute2:[12,1,1,""],get_impute2_ref:[12,1,1,""],get_os_info:[12,1,1,""],get_plink:[12,1,1,""],get_shapeit:[12,1,1,""],main:[12,1,1,""],parse_args:[12,1,1,""],untar_file:[12,1,1,""]},"genipe.tools.impute2_extractor":{check_args:[12,1,1,""],extract_companion_files:[12,1,1,""],extract_markers:[12,1,1,""],gather_extraction:[12,1,1,""],get_file_prefix:[12,1,1,""],get_samples:[12,1,1,""],index_file:[12,1,1,""],main:[12,1,1,""],parse_args:[12,1,1,""],print_data:[12,1,1,""]},"genipe.tools.impute2_merger":{check_args:[12,1,1,""],concatenate_files:[12,1,1,""],main:[12,1,1,""],parse_args:[12,1,1,""]},"genipe.tools.imputed_stats":{check_args:[12,1,1,""],compute_statistics:[12,1,1,""],fit_cox:[12,1,1,""],fit_linear:[12,1,1,""],fit_logistic:[12,1,1,""],fit_mixedlm:[12,1,1,""],get_formula:[12,1,1,""],is_file_like:[12,1,1,""],main:[12,1,1,""],parse_args:[12,1,1,""],process_impute2_site:[12,1,1,""],read_phenotype:[12,1,1,""],read_samples:[12,1,1,""],read_sites_to_extract:[12,1,1,""],samples_with_hetero_calls:[12,1,1,""],skat_parse_impute2:[12,1,1,""],skat_read_snp_set:[12,1,1,""]},genipe:{config:[6,0,0,"-"],db:[7,0,0,"-"],error:[5,0,0,"-"],formats:[8,0,0,"-"],pipeline:[5,0,0,"-"],reporting:[9,0,0,"-"],task:[10,0,0,"-"],test:[5,1,1,""],tests:[11,0,0,"-"],tools:[12,0,0,"-"],version:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","exception","Python exception"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["py","method","Python method"],"6":["py","staticmethod","Python static method"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:exception","3":"py:class","4":"py:attribute","5":"py:method","6":"py:staticmethod","7":"py:classmethod"},terms:{"1000gp_":19,"1000gp_phase3":[3,24],"1000gp_phase3_chr":[2,24],"1000gp_phase3_chr1":[3,24],"1000gp_phase3_chr2":[3,24],"12gb":24,"1_5000000":[14,24],"_check_impute2_fil":11,"_check_output_fil":11,"_combined_b37":[2,24],"_create_db_connect":11,"_is_sanit":11,"_static":[22,24,25,26,27],"boolean":8,"case":[5,11,21,22,26],"catch":12,"class":11,"default":[8,12,18,21,22,24,25,26,27],"export":0,"final":[2,7,14,21,22,23,24,25,26,27],"float":[2,7,8,9,12,16,17,18,19,21,22,23,25,26,27],"function":[7,8,9,11,12,20],"import":[2,4,21,22,24,25,26,27],"int":[2,5,7,8,9,10,18,19,21,22,25,26,27],"long":[4,12,16,21,23,24],"new":[4,7,21,24],"return":[6,7,8,9,10,12],"short":2,"static":11,"true":[7,9,10,12,21],"var":9,"while":[0,7,12,21,22,25,26,27],abov:[4,22,25,26,27],absent:24,academ:24,accept:27,accord:[7,12,21,23,24],activat:4,actual:[12,24],add:[4,9,18,21,22,25,26,27],addit:[8,21],additive_from_prob:[8,11],adj:25,adjust:25,after:[9,21,22,23,25,26,27],again:[3,14,21,24],age:[21,22,25,26,27],aim:2,algorithm:[18,21],align:[9,24],all:[0,4,5,7,11,12,15,21,22,23,24,25,26,27],allel:[2,8,11,12,14,16,17,18,19,21,22,23,24,25,26,27],allow:24,alon:12,along:[12,24],alreadi:7,also:[2,8,21,23,24],altern:[12,21,22,24,25,26,27],alwai:[0,4,18,21,22,24,25,26,27],among:24,analys:[0,12,21,27],analyz:[12,21,22,24,25,26,27],ani:[4,8,21,24],anoth:[12,24],another:21,apart:12,api:24,appear:[21,24],applic:21,approach:[0,21,27],appropri:24,approxim:[22,25,26,27],arbitrari:21,arch:12,architectur:12,archiv:[12,21],arg:[11,12],argpars:12,argument:[2,12,21,22,23,25,26,27],argumentpars:12,argv:12,arrai:[8,12],ask:[11,12],assertlog:11,assess:[2,24],assign:21,associ:[2,17,19,21,24,25,26],assum:[8,21],attent:21,author:[2,19,24],autom:24,automat:[0,2,7,12],autoreport:5,autosom:[2,14,18],avail:[9,12,15,18,21,22,24,25,26,27],avoid:[0,21],axi:[22,25,26,27],background:[2,19,24],backslash:9,base:[5,11,21],bash:[4,12,24],beaulieu:2,becaus:[12,21,24],bed:[3,14,16,23,24],been:[4,23],befor:[4,9,24],begen:24,begin:12,behavior:[22,25,26,27],below:[12,22,23,24,25,26,27],best:[21,24],beta:[12,27],between:[2,16,18,19,21,22,23,24,25,26,27],bfile:[2,19,24],bgzip:[2,8,19,24],bib:[14,24],bim:[3,14,24],bin:[2,3,4,19,24],binari:[2,16,19,23,24],binary:[2,19],bind:21,binomi:[18,20,26],biolog:21,biopython:4,black:0,block:9,blood:21,bool:[7,8,9,10,12],both:[21,22,24,25,26,27],bst:[14,24],buffer:[2,19],build:24,bunzip2:[22,25,26,27],bz2:[22,24,25,26,27],call:[2,8,12,16,17,19],can:[2,4,12,16,19,21,23,24],candid:21,caption:9,captur:11,care:[12,24],carefully_crafted_snp_set:21,categor:[12,18,21,22,25,26,27],censor:22,centr:2,certain:9,ceu:24,chanc:23,chang:[9,22,24,25,26,27],channel:4,charact:9,chart:24,check:[2,7,10,11,12,19,24],check_arg:[11,12],check_dupl:12,check_fil:12,check_rc:10,check_task_complet:[7,11],choic:21,chr1:[14,24],chr1_10000001_15000000_walltim:24,chr22:[22,23,25,26,27],chr2_node:24,chr2_ppn:24,chr2_walltim:24,chr:[16,17,22,23,25,26,27],chrn:[22,23],chrom:[2,19,24],chromosom:[0,2,8,12,14,17,18],chromosome_length:[14,24],chrx:[18,21,22,25,26,27],classmethod:11,clean:24,clean_logging_handl:11,close:[22,23,25,26,27],cluster:[7,10,24],code:[1,10,18,21,22,25,26,27],coef:[22,25,26,27],coeffici:[22,25,26,27],cohort:[12,24],col:8,col_align:9,color:9,colorize_tim:[9,11],column:[7,8,9,11,12,18,21,22,23,25,26,27],coma:[18,21,22,25,26,27],combin:[16,23],come:[7,12],comma:21,command:[2,4,9,10,12,19,21,22,23,24,25,26,27],comment:24,common_complet:23,commonli:[2,25,26,27],companion:[12,23],compar:[0,21,22,25,26,27],comparison:20,compat:[16,23],compil:20,complet:[2,7,11,12,16,17,19,23,24],completion_r:[11,12,14,24],complex:0,compos:0,compress:[2,19,24],compris:24,comput:[0,8,11,12,21,22,23,24,25,26,27],computation:0,compute_statist:[11,12],concaten:12,concatenate_fil:12,concret:21,conda:4,conduct:[2,21],confid:[22,25,26,27],config:[2,3,4,5],config_jinja2:9,configfil:6,configur:[2,4,6,9,19],consid:[12,18,21,22,25,26,27],consider:0,consist:[21,22,25,26,27],consol:[21,22,23,25,26,27],consum:27,contact:21,contain:[2,7,8,12,16,18,19,21,22,23,24,25,26,27],content:[1,2,4],context:11,continu:[18,21],continuum:4,control:[22,26],converg:[22,26],copi:24,correct:[21,24],correctli:[21,22,25,26,27],correspond:[0,7,8,12,21,22,23,25,26,27],could:21,count:8,covar:[12,18,21,22,25,26,27],covari:[12,21,22,25,26,27],cox:[0,11,12],cpu:[0,21],creat:[4,7,8,9,12,16,20],create_float:[9,11],create_tabular:[9,11],create_task_db:[7,11],create_task_entri:[7,11],cross:24,csv:21,current:[7,21],custom:[12,21],cyp2d6:23,cyp2d6_common:23,darwin:12,dash:0,data:[2,3,4,9,11,12,19,20,21,22],databas:[7,24],datafram:[8,12],dataset:[23,24,25,27],db_name:7,debug:[2,16,17,18,19,21,22,23,25,26,27],decreas:[0,21],defin:[21,24],delet:24,deleteri:21,delimit:[12,21,22,23,25,26,27],demonstr:27,dep:4,depend:[4,12,21,23,24,27],describ:[0,2,12,19,20],descript:[1,3,12,14,16,17,18,19,21,24],detail:20,determin:[12,21],develop:21,dict:[6,7,9,10,12],dictionari:7,differ:[4,21,22,23,24,25,26,27],dir:[2,19,24],directori:[2,3,7,9,10,19,21,22,23],discard:12,discret:[18,21],disk:[12,24],dispatch:12,displai:[9,21,22,23,25,26,27],distribut:[18,20,24,26],divid:[18,21,22,25,26,27],document:[9,21,22,23,25,26,27],doe:12,doesn:[4,7,8,24],doi:[0,27],don:[4,21],done:[9,12,21,22,24,25,26,27],dosag:[2,8,12,16],dosage_from_prob:[8,11],down:0,download:[4,12,21,22,24,25,26,27],download_fil:12,downstream:2,drawback:24,drmaa:[2,3,4,6,7,10,19],dummi:[22,25,26,27],duplic:12,each:[0,2,6,12,14,19,22,23,24,25,26,27],earlier:21,easi:[2,21,23],easili:2,echo:23,effect:[2,11,12],effici:2,efron:12,either:[2,8,9,16,19,21,23],ejhg:[0,27],element:[8,12],emit:11,emph:9,empti:[12,24],encod:[8,22,25,26,27],end:[2,7,16,23],end_tim:7,enough:24,ensembl:24,entri:7,environ:[0,2],equal:[7,8,12,16,22,23,24,26],equival:9,error:1,escape:9,especi:21,estim:[2,17,18,19,24,27],etc:[23,24,25,27],even:21,event:[12,18,22],everi:[12,18,21],everyth:21,exact:27,exampl:[11,21,22,23,24,25,26,27],exceed:24,except:[5,12,22,25,26,27],exception:[5,8],exclud:[12,18,21,22,24,25,26,27],exclus:[2,17,19],exclusion_summari:14,exist:[7,8,12,23],exit:[2,16,17,18,19,21,22,23,25,26,27],exm295293:21,expect:[11,12,20,21],explain:21,explan:21,expos:[22,26],extend:21,extens:[12,21,22,24,25,26,27],extension:24,extern:24,extra:[2,19],extract:[2,11,12,16,18],extract_companion_fil:12,extract_filenam:12,extract_mark:12,extractor:[2,15],facilit:[2,21],fai:[3,24],faidx:24,fail:24,fals:[7,8,9,10,12],fam:[3,14,21,22,24,25,26,27],famili:12,familiar:21,fasta:[3,24],father:[12,21,22,25,26,27],feasibl:0,featur:21,femal:[8,18,21,22,25,26,27],fetch:[23,24],fid:12,field:[8,21],figur:[0,9,22,25,26,27],file:2,file_sort:11,filenam:12,fill:12,filter:[2,19,24],final_impute2:[14,22,23],finish:[11,24],first:[2,4,8,11,12,19,20,21,22,23,24,25,26,27],fit:[12,18,27],fit_cox:[11,12],fit_linear:[11,12],fit_logist:[11,12],fit_mixedlm:[11,12],five:[8,24],flag:[18,21],flip:[8,24],float_typ:9,flush:11,follow:[0,4,8,9,12,21,22,23,24,25,26,27],footer:24,forget:[4,21],format:5,format_tex:[9,11],format_tim:[9,11],formula:[9,12],founder:[25,27],four:[8,23,24],fourth:23,freeli:24,frequenc:[2,8,12,16,17,18,19,21,22,23,24,25,26,27],frequency_pi:[14,24],frequent:[22,25,26,27],from:[7,8,9,12,14,16,17,18,20],full:[11,12,21,24],further:21,futur:[0,23],gather:[8,12,23,27],gather_execution_tim:11,gather_extract:12,gather_imputation_stat:11,gather_maf_stat:11,gcc:24,gen:12,gender:[8,12,18,21,22,25,26,27],gender_c:12,gene:[21,23],gener:[2,8,9,12,14],generate_bash:12,generate_report:9,genet:23,genetic_map_chr1_combined_b37:[3,24],genetic_map_chr2_combined_b37:[3,24],genetic_map_chr:[2,19,24],genip:[1,2,3,4],genipe_config:[3,24],genipe_is_great:21,genipe_pyvenv:4,genipe_task:7,genipe_tutori:[3,5],genipeerror:[5,12],genome:2,genomic_rang:12,genotyp:[2,3,8,12,18,19,20,21],get:[7,8,11,12,14,18,21,22,23,25,26,27],get_all_runtim:[7,11],get_chrom_encod:11,get_chromosome_length:11,get_cross_validation_result:11,get_file_prefix:12,get_formula:[11,12],get_genotyp:12,get_good_prob:[8,11],get_hg19:12,get_impute2:12,get_impute2_ref:12,get_index:[8,12],get_open_func:8,get_os_info:12,get_plink:12,get_sampl:12,get_shapeit:12,get_task_runtim:7,github:[21,22,24,25,26,27],given:[8,21],glm:[18,20,26],gmp:22,good:8,good_sit:[11,12,14,21,22,24,25,26,27],grai:9,grch36:24,grch37:24,greatli:[21,22,25,26,27],group:[12,21,27],guidelin:24,gwas:0,had:0,handler:11,hap:[2,3,14,19,24],haplotyp:[2,19,24],hapmap:24,hapmap_ceu_r23a_hg19:[3,24],hard:[8,16],hard_calls_from_prob:[8,11],have:[0,4,5,21,22,23,24,25,26,27],hazard:[0,12],header:[9,12,21,24],header_multicol:9,heart:2,help:[2,16,17,18,19,21,22,23,25,26,27],henc:[7,8,9,12,21,22,23,24,25,26,27],here:[1,3,12,14,21,24],hesit:21,hetero_c:12,hetero_prob:8,heterozyg:[8,12,21,22,23,25,26,27],hg19:[3,12,24],high:[0,24,27],higher:[0,4,5,8,12,16,22,23,24,25,26,27],home:[3,4,22,23,24,25,26,27],homo_prob:8,homozyg:[8,21,22,23,25,26,27],hour:[0,9,24],how:21,hpc:[2,10],hpc_option:10,http:[4,22,24,25,26,27],huge:23,human:[2,19],hypertens:21,i_filenam:12,i_prefix:12,id_1:[12,21,22,25,26,27],id_2:[12,21,22,25,26,27],identif:[12,22,23,24,25,26,27],identifi:[12,21],iid:12,imiss:[14,24],imit:[22,25,26,27],implement:0,imposs:24,improv:21,imput:[0,2,3,8,12,14,17,19,20,21,22,23],impute2:[2,3,5],impute2_extractor:5,impute2_filenam:12,impute2_info:[11,12,14,24],impute2_info_by_sampl:[14,24],impute2_lin:8,impute2_merg:5,impute2_summari:[14,24],impute2_warn:[14,24],impute:[2,15],imputed_sit:[11,12,14,24],imputed_stat:5,includ:[3,12,21,22,23,24,25,26,27],inclus:[22,23,25,26,27],incomplet:7,increas:[0,24],ind:[14,24],index:5,index_fil:12,indic:[18,21],individu:24,infer:[8,24],info:[2,11,12,16,17,19,23],inform:[2,3,5,8,9,11,12,14,16,17,19,21,22,23,24,25,26,27],ini:[3,24],initi:[2,3,19,24],inlin:9,input:2,insert:24,insid:24,insignific:9,instal:[0,2],install:2,installat:2,instead:[12,18,21,22,25,26,27],institut:2,insur:21,integ:5,intens:0,interact:[11,12,18,21,22,25,26,27],intercept:[18,27],interest:[12,21],intermedi:24,intern:21,interpret:[21,22,25,26,27],interv:[22,25,26,27],introduc:24,invalid:11,involv:27,is_file_lik:12,is_long:12,is_revers:11,issu:[21,22,26],issue:21,itself:[12,20],jinja2:[4,9],jmp:22,job:[7,24],join:[9,24],just:5,jxf:24,keep:[8,21,22,24,25,26,27],kei:7,kept:[22,24,25,26,27],kind:23,known:21,kwarg:12,label:9,languag:[9,24],larg:[22,26,27],larger:21,last:21,later:12,latest:4,latex:[2,9,24],latter:21,launch:[2,4,7,12,19,21,24],launch_task:10,launch_tim:7,launcher:[2,5],least:[18,20,24,25],left:[22,25,26,27],legend:[2,3,19,24],length:[2,19,24],less:27,level:[2,5,11,16,17,18,19,21,22,23,25,26,27],levelnam:11,librari:7,licenc:24,licens:24,life:21,lifelin:4,lift:24,liftover:24,like:[0,12,21],likelihood:[18,27],line:[0,2,8,9,12,16,18,19,21,22,23,24,25,26,27],linear:[0,2,11,12],link:[20,24],linux:[4,12],list:[8,9,10,12,18,21,22,23,24,25,26,27],lmiss:[14,24],load:[0,2,19,24],locat:[11,12,22,23,24,25,26,27],loci:[0,12],log:[2,11,14,16,17,18,19,21,22,23,24,25,26,27],logger_nam:11,logging_format:11,logic:24,logist:[0,2,11,12],logit:20,longer:9,look:[8,21,24],low:[25,27],lower:[22,25,26,27],machin:[4,21],macosx:12,made:[17,27],maf:[0,8,11,12,14,16,18,21,22,23,24,25,26,27],maf_dosage_from_prob:[8,11],maf_from_prob:[8,11],main:[2,12,15],major:[8,21,22,23,25,26,27],make:[4,21,24],makefil:[14,24],male:[8,12,18,21,22,25,26,27],manag:[4,11,20,21],mani:21,manual:21,map:[2,11,12,14,19,23,24],mark:7,mark_drmaa_task_complet:[7,11],mark_task_complet:[7,11],mark_task_incomplet:[7,11],marker:[0,2,8,11,12,16,18,19,21,22,23,24,25,26,27],marker_list:23,markers_to_exclud:[14,24],markers_to_extract:12,markers_to_flip:[14,24],mask:8,match:[22,25,26,27],mathemat:9,mathgen:24,matplotlib:[4,24],matrix:[8,12,21],matrix_from_lin:[8,11],maximum:[18,22,25,26,27],mean:[22,25,26,27],measur:[2,17,19,20,24,27],memori:24,merg:[12,24],merge_impute2:[12,24],merger:[2,15],messag:[2,11,12,16,17,18,19,21,22,23,25,26,27],method:[4,12,24],methodnam:11,metric:[2,24],might:[12,22,23,24,25,26,27],million:24,min_prob:8,mind:24,miniconda3:4,minim:[18,21,22,25,26,27],minor:[8,12,16,18,21,22,23,24,25,26,27],minut:[9,24],miss:[11,12,14,18,21,22,23],mix:[0,2,11,12],mixedlm:[11,12,18],mixedlm_p:12,mkdir:[22,23,24,25,26,27],mod:21,model:[0,11,12],modifi:[7,21,22,24,25,26,27],modul:[1,2,4],modulel:12,montreal:2,more:[0,2,3,5,14,20,22],most:[4,12,22,24,25,26,27],mostli:12,mother:[12,21,22,25,26,27],msg:5,much:21,multipl:[3,21,23,24,27],must:[22,25,26,27],my_skat_analysi:21,na06985:[22,25,26,27],na06991:[22,25,26,27],na06993:[22,25,26,27],na06994:[22,25,26,27],name:[2,6,7,8,11,12,16,18,19,21,22,23,24,25,26,27],namespac:12,nan:23,narrow:21,nb_thread:10,necessari:12,necessarili:21,need:[4,8,9,12,21,22,23,25,26,27],neutral:21,node:[2,19,24],non:[2,18,19,21,22,25,26,27],none:[8,9,10,11,12,18,21,22,25,26,27],nonpar:[2,19],normal:[2,12,19],note:[4,12,18,21,22,24,25,26,27],noteworthi:21,noth:12,notic:21,now:24,nucleotid:24,number:[0,2,8,9,10,12,16,17,18,19,21,22,23,24,25,26,27],numpi:[4,8,12],o_fil:12,o_prefix:12,object:[11,20],observ:[2,17,18,19,22,24],occur:[21,23],odd:26,often:[21,23],omit:21,ommit:4,onc:24,once:[4,21,23,24],onli:[9,12,16,21,22,23,24,25,26,27],only:[4,9,16,21,22,23,24,25,26,27],open:[8,21],openblas:0,openblas_num_threads:0,oper:12,opt:12,optim:[0,24,27],option:[0,2,4,9,10,12],optional:[3,24],options:[2,19],order:[12,18,21,22,24,25,26,27],ordinari:[18,20,25],org:[4,24],origin:[9,23,24,27],original_text:9,os_nam:12,other:[20,21,23,24],otherwis:[7,9,12,24],our:21,out:[9,16,18,21,22,23,25,26,27],out_dir:[7,9,10],out_directori:11,out_format:12,out_prefix:12,outcom:[18,21],output:[2,9,10,11,12],over:[21,24],packag:[1,2],page:[2,21,24],panda:[4,8,12],par1:[2,19],par2:[2,19],parallel:[12,21],paramet:[2,5,6,7,8,9,10,12],parametr:24,pars:[6,11,12],parse_arg:12,parse_drmaa_config:6,parser:5,part:[2,21,22,23,25,26,27],pass:[12,18,21,24],path:[2,12,19,24],pathwai:21,patsi:4,pdf:[2,14,24],pedfil:[2,19,23,24],per:[12,16,22,23,24,25,26,27],perform:[0,2,4,16,18,19,20,21,22,23,24,25,26,27],pgxcentr:[22,24,25,26,27],pharmacogenom:2,phase:[2,14,19,24],pheno1:25,pheno2:26,pheno3:27,pheno:[18,21,22,25,26,27],phenotyp:12,phenotypes_linear:25,phenotypes_logist:26,phenotypes_mixedlm:27,phenotypes_surviv:22,pie:24,pip:4,pipe:12,pipelin:1,pipeline:2,placement:9,plan:0,platform:24,pleas:21,plink:[0,2,3,12,16],plink_exclud:24,plink_final_exclud:24,plink_flip:24,plink_missing_r:24,plink_pheno:[12,21,22,25,26,27],point:7,poor:[22,25,26,27],popular:[21,22],posit:[8,12,21,22,23,25,26,27],possibl:[4,18,21,22,23,24,25,26,27],power:[0,21,24],ppn:24,practic:[21,24],pre:24,preambl:[2,3,10,19],precis:27,predict:21,prefix:[2,12,16,17,18,19,21,22,23,25,26,27],prepar:[12,20],presenc:11,present:[15,20,21],pressur:21,presum:7,previou:[4,21,22,24,25,26,27],previous:[4,12,21,24],print:12,print_data:12,prior:[0,21,24],priorit:21,prob:[8,16,18,21,22,23,25,26,27],prob_matrix:8,prob_t:12,probabilitti:[12,24],probabl:[2,8,12,16,17,18,19,21,22,23,24,25,26,27],problem:[5,12,21],process:[0,2,4,10,11,12,18,19,21,22,24,25,26,27],process_impute2_sit:[11,12],processor:[2,19],produc:[12,24],program:[2,16,17,18,19,21,22,23,25,26,27],project:[2,3,24],properli:24,properti:23,proport:[0,12],provid:[2,15,20,21,22,23,24,25,26,27],pseudo:[18,21,22,25,26,27],pseudoautosom:[2,19],publicli:24,push:21,put:[2,12,19],pyfaidx:4,python_3_3_compat:5,python_3_4_assertlogscontext:11,python_3_4_basetestcasecontext:11,python_3_4_capturinghandl:11,python_env:24,qualiti:[0,2,21,22,23,24,25,26,27],quantit:21,question:21,queue:12,quickli:0,quit:[12,27],quot:[2,19],rais:[5,8,12],random:[11,12,18,27],random_effect:12,randomli:[22,25,26,27],rang:[12,16,23],rare:[21,22,25,26,27],rarest:[21,22,25,26,27],rate:[2,11,12,16,17,19,23,24],ratio:26,raw:11,read:[12,18,21,22,24,25,26,27],read_phenotyp:[11,12],read_preambl:11,read_sampl:[11,12],read_sites_to_extract:12,reader:21,readi:[21,24],real:[12,18,21,27],real_chrom:12,recent:[4,24],recogn:12,record:11,refer:[2,3,12,14],region:[2,18,19,21,22,23,25,26,27],regress:[0,11,12],regular:[18,21],relaunch:7,releas:4,relev:12,reml:[12,18,27],remov:[12,25,27],remove_gend:12,render:[2,21],repeat:[2,20,27],replac:[2,9,19,24],repo:4,report:[2,5],repres:[8,9,21,23],represent:9,reproduc:21,request:21,requir:[0,2,3],rerun:24,resembl:[21,22,25,26,27],reserv:24,resourc:24,respect:24,rest:24,restor:8,result:[8,9,12,20],result_col:12,return_fmt:8,review:24,right:[22,24,25,26,27],row:[12,21,22,25,26,27],rs123456:12,rs143768051:21,rs183736430:21,rs202028804:21,rs369840848:21,rs372879164:23,rs375511922:21,rs376366718:[22,25,26,27],rs6423472:23,rs7289830:23,rs76139713:23,rs79511213:21,rule:[2,19,24],run:[0,7,9,12,20],run_info:9,run_opt:9,run_skat:21,runtest:11,runtim:24,same:[12,16,18,21,22,23,24,25,26,27],sampl:[0,2,3,8,12,14,16,18,19],sample1:21,sample2:21,sample3:21,sample4:21,sample_id:[18,21,22,25,26,27],sampleid:[22,25,26,27],samples_with_hetero_cal:[11,12],sanit:9,sanitize_tex:[9,11],saucier:2,save:[7,12,24],scale:[8,18,21,22,25,26,27],schedul:[7,24],scheme:[12,21],scipi:4,scope:21,script:[2,10,12,15,20],second:[2,7,8,9,11,12,19,21,22,23,25,26,27],section:[2,3,14,15,19,20,22,23,24,25,26,27],see:[2,3,4,21,22,23,24,25,26,27],segment:[2,19,24],select:[21,23],send:21,sep:8,separ:[8,12,18,21,22,23,25,26,27],seri:12,server:20,set1:21,set2:21,set:[2,5,7,12,16,17,18,19,20],setup:11,setup_skat_fil:11,setupclass:11,setuptool:4,seven:12,sex:[12,21,22,25,26,27],shape:8,shapeit:[2,3,12],shapeit_check_1:24,shapeit_check_2:24,shapeit_phas:24,shapetit:24,shebang:[2,19,24],should:[2,4,12,18,19,21,22,24,25,26,27],show:[0,2,16,17,18,19,21,22,23,25,26,27],shown:[12,21],sign:[22,25,26,27],significantli:0,sikorska:[0,27],sim:9,simpl:0,simpli:[12,21],simplic:21,simultan:[21,24],sinc:[12,22,24,25,26,27],singl:[2,8,9,12,19,21,24],site:[2,8,12,17,18,19],site_info:12,site_nam:8,size:21,skat:[2,11,12],skat_parse_impute2:12,skat_read_snp_set:12,skip:[18,21,22,24,25,26,27],skip_drmaa_config:24,slow:0,small:21,snp:[11,12,14,18,20],snp_set:[12,18,21],softwar:4,some:[0,12,20,24],someth:21,sourc:[1,4,5,6,7,8,9,10,11,12,21,24],space:[8,12,22,23,24,25,26,27],special:[0,9],specif:[21,22,23,24,25,26,27],specifi:[0,9,12,16,21,23,24,25,26,27],speed:[2,23],split:[8,12],sqlite:[7,24],squar:[18,20,25],standalon:2,standard:[4,18,22,25,26,27],start:[7,16,21,23,24],start_tim:7,stat:[2,15],state:[2,19],statgen:[4,24],statsmodel:[4,12],step:[0,9,12,21,24,27],str:[6,7,8,9,10,12],straightforward:21,strand:[2,19,24],string:[2,9,19],structur:[3,14,21,22,23,24,25,26,27],studi:[12,21,24,25,26],sub:[0,24],subject:27,submodul:1,subpackag:1,subsequ:[12,21,22,23,24,25,26,27],subset:[23,24],successfulli:4,suffici:0,suggest:21,summar:24,summari:[14,20],supp_fil:24,supplement:24,suppli:12,support:4,suppos:[22,23,25,26,27],sure:[4,24],surviv:[2,12,18],symbol:9,system:[12,24],systol:21,systolicbp:21,tab:[12,21,22,25,26,27],tabl:[7,9,24],tabul:23,tabular:9,take:12,taken:12,tar:[12,24],task:[2,5,6,7],task_id:7,task_runtim:11,teardown:11,teardownclass:11,techniqu:22,tell:8,templat:[2,9,19,21,24],template:[2,19],temporari:24,term:24,test:2,test_additive_from_prob:11,test_cas:11,test_check_allel:11,test_check_arg:11,test_check_impute2_fil:11,test_check_missing_impute2:11,test_check_output_fil:11,test_check_task_complet:11,test_colorize_tim:11,test_completion_r:11,test_compute_statist:11,test_continu:11,test_continuous_multiprocess:11,test_create_db_connect:11,test_create_float:11,test_create_tabular:11,test_create_task_db:11,test_create_task_entri:11,test_db:5,test_discret:11,test_discrete_multiprocess:11,test_dosage_from_prob:11,test_extract:11,test_file_sort:11,test_fit_cox_interaction_snp1:11,test_fit_cox_invalid:11,test_fit_cox_snp1:11,test_fit_cox_snp2:11,test_fit_cox_snp3:11,test_fit_linear_interact:11,test_fit_linear_invalid:11,test_fit_linear_snp1:11,test_fit_linear_snp2:11,test_fit_linear_snp3:11,test_fit_logistic_interact:11,test_fit_logistic_invalid:11,test_fit_logistic_snp1:11,test_fit_logistic_snp2:11,test_fit_logistic_snp3:11,test_fit_mixedlm_interact:11,test_fit_mixedlm_interaction_use_ml:11,test_fit_mixedlm_invalid_column:11,test_fit_mixedlm_snp1:11,test_fit_mixedlm_snp1_use_ml:11,test_fit_mixedlm_snp2:11,test_fit_mixedlm_snp2_use_ml:11,test_fit_mixedlm_snp3:11,test_fit_mixedlm_snp3_use_ml:11,test_format:5,test_format_tex:11,test_format_tim:11,test_full_fit_cox:11,test_full_fit_cox_interact:11,test_full_fit_cox_multiprocess:11,test_full_fit_linear:11,test_full_fit_linear_interact:11,test_full_fit_linear_multiprocess:11,test_full_fit_logist:11,test_full_fit_logistic_interact:11,test_full_fit_logistic_multiprocess:11,test_full_fit_mixedlm:11,test_full_fit_mixedlm_interact:11,test_full_fit_mixedlm_interaction_use_ml:11,test_full_fit_mixedlm_multiprocess:11,test_full_fit_mixedlm_multiprocess_use_ml:11,test_full_fit_mixedlm_use_ml:11,test_gather_execution_tim:11,test_gather_imputation_stat:11,test_gather_maf_stat:11,test_genom:11,test_genomic_info:11,test_genomic_maf:11,test_genomic_maf_info:11,test_genomic_maf_r:11,test_genomic_maf_rate_info:11,test_genomic_r:11,test_get_all_runtim:11,test_get_chrom_encod:11,test_get_chromosome_length:11,test_get_cross_validation_result:11,test_get_formula:11,test_get_good_prob:11,test_get_task_runtim:11,test_good_sit:11,test_hard_calls_from_prob:11,test_impute2:11,test_impute2_extractor:5,test_impute2_info:11,test_impute2_merg:5,test_imputed_sit:11,test_imputed_stat:5,test_info:11,test_is_revers:11,test_is_sanit:11,test_launch:5,test_maf:11,test_maf_dosage_from_prob:11,test_maf_from_prob:11,test_maf_info:11,test_maf_r:11,test_maf_rate_info:11,test_main_pipelin:5,test_map:11,test_mark_drmaa_task_complet:11,test_mark_task_complet:11,test_mark_task_incomplet:11,test_matrix_from_lin:11,test_process_impute2_sit:11,test_rat:11,test_rate_info:11,test_read_phenotyp:11,test_read_preambl:11,test_read_sampl:11,test_read_sites_to_extract:11,test_reporting_util:5,test_samples_with_hetero_cal:11,test_sanitize_tex:11,test_tex_inline_math:11,test_wrap_tex:11,testcas:11,testdb:11,testformat:11,testimpute2extractor:11,testimpute2merg:11,testimputedstat:11,testimputedstatscox:11,testimputedstatslinear:11,testimputedstatslogist:11,testimputedstatsmixedlm:11,testimputedstatsskat:11,testlaunch:11,testmainpipelin:11,testreportingutil:11,tex:[9,14,24],tex_format:9,tex_inline_math:[9,11],text:[9,24],textbackslash:9,textbf:9,textit:9,texttt:9,tgz:24,than:[0,5,9,16,22,23,24,25,26,27],thei:[12,21,24],them:[21,22,24,25,26,27],thi:[0,2,4,7,8,9,12,15,16,17,18,19,20],think:8,third:[11,21,22,23,25,26,27],thorough:3,those:[7,12,14,21,22,23,24,25,26,27],thousand:24,thread:[0,2,19,24],three:[2,8,21,22,23,24,25,26,27],threshold:[2,8,12,16,17,18,19,21,22,23,24,25,26,27],through:[20,21],throughout:[21,24],throughput:24,tie:12,time_to_ev:12,titl:[2,19,24],title:[2,19],tmp_dir:11,to_extract:12,to_process:10,togeth:[12,21],too:26,tool:[2,5],total:[0,9],total_second:9,tracker:21,trait:21,transpos:23,tree:24,trigger:12,triplet:21,tte:22,tupl:[8,12],tutori:[2,3,12,14],two:[0,8,21,22,23,25,26,27],txt:[2,3,14,19,21,22,23,24,25,26,27],type:[4,6,7,8,9,12,18,21],typic:[0,3,12,20],ucsc:24,under:21,underli:23,unfortun:24,uniqu:[12,22,25,26,27],unittest:11,unknown:[18,21,22,25,26,27],unless:12,unsatisfi:21,untar_fil:12,updat:[4,7],update:2,upload:[4,24],upper:[22,25,26,27],url:[12,24],usag:[2,21,22,23,25,26,27],uscs:24,use:[2,9,19,21],use_ml:12,useful:24,user:[12,21,24,27],using:0,usual:7,util:5,valid:[21,22,24,25,26,27],valu:[7,8,11,12,16,18,21,22,23,24,25,26,27],valuabl:24,var1:[22,25,26,27],vari:[22,23,25,26,27],variabl:[0,2,8,9,12,18,19,21,22,24,25,26,27],variant:[12,18,21,24],variat:24,vector:8,verbos:5,veri:21,verif:24,verifi:[12,21,24],version:[1,2,4],virtual:2,visibl:21,visit:27,wai:[2,23,24],walk:[20,21],walltim:[2,19,24],want:21,warn:21,websit:24,weight:[12,18,21],well:21,were:[0,12,21,22,24,25,26,27],wget:[4,22,24,25,26,27],what:[22,23,24,25,26,27],whatev:24,when:[0,2,8,11,12,16,19,21,22,23,24,25,26,27],where:[0,7,8,9,12,21,22,23,24,25,26,27],whether:[9,10,12],which:[0,7,9,12,18,20,21,22,23,24,25,26,27],whitout:[25,27],who:21,whole:2,window:[2,12,19],wise:[12,24],witch:17,without:23,won:[4,12],word:21,work:[12,21,22,23,24,25,26,27],would:21,wrap:9,wrap_tex:[9,11],write:[9,12,16,21,23],written:9,written_tim:9,x86_64:4,yield:21,you:[4,21,22,23,24,25,26,27],your:[4,21,24],zero:9,zxf:24},titles:["Statistical Analysis Execution Time","Implementation","Genome-Wide Imputation Pipeline","Input Files","Installation","genipe package","genipe.config package","genipe.db package","genipe.formats package","genipe.reporting package","genipe.task package","genipe.tests package","genipe.tools package","genipe","Output Files","Options and Parameters","Impute2 Extractor - Options and Parameters","Impute2 Merger - Options and Parameters","Imputed Stats - Options and Parameters","Main Pipeline - Options and Parameters","Short Tutorials","SKAT analysis","Survival analysis","Site extraction","Genome-wide imputation pipeline","Linear regression","Logistic regression","Linear mixed effects model"],titleterms:{"short":20,about:2,activ:4,analysi:[0,21,22,25,26,27],automat:19,autoreport:9,autosom:19,availabl:18,call:[21,23],characterist:23,chrn:24,chromosom:19,common:18,comparison:[22,25,26,27],compil:24,config:6,configur:24,content:[5,6,7,8,9,10,11,12],cox:[18,22],creat:21,data:24,deriv:21,describ:21,detail:24,directori:24,dosag:[18,21,22,23,25,26,27],drmaa:24,effect:[18,20,27],environ:4,error:5,execut:[0,22,23,24,25,26,27],extract:[20,22,23,25,26,27],extraction:[16,23],extractor:16,file:[3,14,16,17,18,21,22,23,24,25,26,27],final_impute2:24,format:[8,21],from:21,gener:[16,17,18,19,21],genip:[5,6,7,8,9,10,11,12,13,21,24],genipe_tutori:12,genom:[2,24],genotyp:[22,24,25,26,27],good:21,hard:21,hazard:18,hpc:19,human:24,implement:1,imput:24,imputat:2,impute2:[8,16,17,19,21,23],impute2_extractor:12,impute2_merg:12,impute:[18,22,25,26,27],imputed_stat:12,index:8,indexat:16,input:[3,16,17,18,19,21,22,23,24,25,26,27],instal:4,install:4,installat:4,introduct:2,launcher:10,linear:[18,20,25,27],logist:[18,20,26],main:19,merger:[17,19],miniconda:4,miss:24,mix:[18,20,27],mixedlm:27,model:[18,27],modul:[5,6,7,8,9,10,11,12],more:24,navig:[4,16,17,18,19,21,22,23,24,25,26,27],option:[15,16,17,18,19,22,24,25,26,27],output:[14,16,17,18,19,22,23,24,25,26,27],packag:[4,5,6,7,8,9,10,11,12],panel:24,paramet:[15,16,17,18,19],parser:6,phenotyp:[18,21,22,25,26,27],pipelin:[2,5,19,20,24],plink:19,preambl:24,prepar:24,proport:18,python:4,python_3_3_compat:11,pyvenv:4,quick:[4,16,17,18,19,21,22,23,24,25,26,27],refer:[19,24],regress:[18,25,26],report:[9,19,24],requir:[4,24],result:[21,22,25,26,27],run:21,sampl:[21,22,25,26,27],script:21,server:24,set:21,shapeit:19,site:[20,21,22,23,25,26,27],skat:[18,20,21],snp:21,softwar:24,stat:18,statist:[0,18],submodul:[5,6,7,8,9,10,11],subpackag:5,summari:24,surviv:[20,22],task:10,test:[4,11],test_db:11,test_format:11,test_impute2_extractor:11,test_impute2_merg:11,test_imputed_stat:11,test_launch:11,test_main_pipelin:11,test_reporting_util:11,thi:21,time:0,tool:12,tutori:[20,21],update:4,usage:[2,21,22,23,25,26,27],using:[4,24],util:[7,9],version:5,virtual:4,wide:[2,24]}})