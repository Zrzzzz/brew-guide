'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { parseMethodFromJson } from '@/lib/jsonUtils'
import { type Method } from '@/lib/config'

interface MethodImportModalProps {
    showForm: boolean
    onImport: (method: Method) => void
    onClose: () => void
    existingMethods?: Method[]
}

const MethodImportModal: React.FC<MethodImportModalProps> = ({
    showForm,
    onImport,
    onClose,
    existingMethods = []
}) => {
    // 导入数据的状态
    const [importData, setImportData] = useState('');
    const [error, setError] = useState<string | null>(null);

    // 监听showForm变化，当表单关闭时清除输入框内容
    useEffect(() => {
        if (!showForm) {
            setImportData('');
            setError(null);
        }
    }, [showForm]);

    // 关闭并清除输入
    const handleClose = () => {
        setImportData('');
        setError(null);
        onClose();
    };

    // 处理导入数据
    const handleImport = () => {
        if (!importData) {
            setError('请输入要导入的数据');
            return;
        }

        try {
            // 解析JSON数据
            setError(null);
            const method = parseMethodFromJson(importData);

            if (!method) {
                setError('解析JSON失败，请检查格式');
                return;
            }

            // 检查是否已存在同名方案
            const existingMethod = existingMethods.find(m => m.name === method.name);
            if (existingMethod) {
                setError(`已存在同名方案"${method.name}"，请修改后再导入`);
                return;
            }

            // 导入方案
            onImport(method);
            // 导入成功后清空输入框和错误信息
            setImportData('');
            setError(null);

        } catch (error) {
            console.error('JSON解析失败:', error);
            setError('JSON格式错误，请检查导入的数据');
        }
    };

    return (
        <AnimatePresence>
            {showForm && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.265 }}
                    className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) {
                            handleClose();
                        }
                    }}
                >
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{
                            type: "tween",
                            ease: [0.33, 1, 0.68, 1], // cubic-bezier(0.33, 1, 0.68, 1) - easeOutCubic
                            duration: 0.265
                        }}
                        style={{
                            willChange: "transform"
                        }}
                        className="absolute inset-x-0 bottom-0 max-h-[75vh] overflow-hidden rounded-t-2xl bg-neutral-50 dark:bg-neutral-900 shadow-xl"
                    >
                        {/* 拖动条 */}
                        <div className="sticky top-0 z-10 flex justify-center py-2 bg-neutral-50 dark:bg-neutral-900">
                            <div className="h-1.5 w-12 rounded-full bg-neutral-200 dark:bg-neutral-700" />
                        </div>

                        {/* 表单内容 */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                type: "tween",
                                ease: "easeOut",
                                duration: 0.265,
                                delay: 0.05
                            }}
                            style={{
                                willChange: "opacity, transform"
                            }}
                            className="px-6 px-safe pb-6 pb-safe overflow-auto max-h-[calc(75vh-40px)]"
                        >
                            <div className="flex flex-col">
                                {/* 顶部标题 */}
                                <div className="flex items-center justify-between mt-3 mb-6">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="rounded-full p-2"
                                    >
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="text-neutral-800 dark:text-neutral-200"
                                        >
                                            <path
                                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                    <h3 className="text-base font-medium">导入冲煮方案</h3>
                                    <div className="w-8"></div>
                                </div>

                                {/* 表单内容 */}
                                <div className="space-y-4 mt-2">
                                    <div className="flex flex-col space-y-2">
                                        <p className="text-xs text-neutral-500 dark:text-neutral-500">
                                            粘贴JSON格式的冲煮方案：
                                        </p>
                                    </div>
                                    <textarea
                                        className="w-full h-40 p-3 border border-neutral-300 dark:border-neutral-700 rounded-md bg-transparent focus:border-neutral-800 dark:focus:border-neutral-400 focus:outline-none text-neutral-800 dark:text-neutral-200"
                                        placeholder='例如: {"method": "改良分段式一刀流", "params": {"coffee": "15g", ...}}'
                                        value={importData}
                                        onChange={(e) => setImportData(e.target.value)}
                                    />
                                    {error && (
                                        <div className="text-sm text-red-500 dark:text-red-400">
                                            {error}
                                        </div>
                                    )}
                                    <div className="flex justify-end space-x-3 mt-4">
                                        <button
                                            onClick={handleClose}
                                            className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-md text-sm"
                                        >
                                            取消
                                        </button>
                                        <button
                                            onClick={handleImport}
                                            className="px-4 py-2 bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-800 rounded-md text-sm"
                                        >
                                            导入
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MethodImportModal 